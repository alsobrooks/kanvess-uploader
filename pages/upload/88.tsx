// pages/upload/88.tsx

import { useState, ChangeEvent } from "react";
import { uploadFiles } from "../../lib/uploadthing-react";

type UploadItem = {
  id: string;
  file: File;
  url?: string;
  uploading: boolean;
};

export default function Upload88() {
  const [uploads, setUploads] = useState<UploadItem[]>([]);

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);

    // 1) Create a placeholder for each file
    const newUploads = fileArray.map((file, idx) => ({
      id: `${Date.now()}-${idx}`, // simple unique ID
      file,
      uploading: true,
    }));
    setUploads((prev) => [...prev, ...newUploads]);

    // 2) Upload each file individually
    newUploads.forEach(async (item) => {
      try {
        const [res] = await uploadFiles("imageUploader", {
          files: [item.file],
        });
        // 3) When it’s done, swap in the URL
        setUploads((prev) =>
          prev.map((u) =>
            u.id === item.id
              ? { ...u, url: res.ufsUrl, uploading: false }
              : u
          )
        );
      } catch (err: any) {
        alert(`Upload error for ${item.file.name}: ${err.message}`);
        // remove on failure
        setUploads((prev) => prev.filter((u) => u.id !== item.id));
      }
    });
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
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
        {uploads.map(({ id, url, uploading }) => (
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
            {uploading ? (
              <div className="thumb-spinner" />
            ) : (
              <img
                src={url}
                alt="Thumbnail"
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