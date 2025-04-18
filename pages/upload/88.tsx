// pages/upload/88.tsx
import { useState, ChangeEvent } from "react";
import { uploadFiles } from "../../lib/uploadthing-react";
import { v4 as uuid } from "uuid"; // you can `npm install uuid`

type UploadItem = {
  id: string;
  url?: string;
  loading: boolean;
};

export default function Upload88() {
  const [uploads, setUploads] = useState<UploadItem[]>([]);

  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Turn FileList into an array
    const fileArray = Array.from(files);

    // For each file, kick off its own upload
    fileArray.forEach(async (file) => {
      const id = uuid();
      // Add a placeholder for this file
      setUploads((u) => [...u, { id, loading: true }]);

      try {
        const [res] = await uploadFiles("imageUploader", { files: [file] });
        setUploads((u) =>
          u.map((item) =>
            item.id === id
              ? { id, url: res.ufsUrl, loading: false }
              : item
          )
        );
      } catch (err: any) {
        alert(`Upload error for ${file.name}: ${err.message}`);
        setUploads((u) =>
          u.filter((item) => item.id !== id)
        );
      }
    });
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>
      <input type="file" multiple onChange={handleSelect} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, 100px)",
          gap: 12,
          marginTop: 24,
        }}
      >
        {uploads.map(({ id, url, loading }) => (
          <div
            key={id}
            style={{
              width: 100,
              height: 100,
              position: "relative",
              borderRadius: 4,
              overflow: "hidden",
              background: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {loading ? (
              <div className="thumb-spinner" />
            ) : (
              <img
                src={url}
                alt="Uploaded thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}
      </div>

      {/* Spinner CSS */}
      <style jsx>{`
        .thumb-spinner {
          width: 24px;
          height: 24px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-top-color: rgba(0, 0, 0, 0.5);
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}