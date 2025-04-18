// pages/upload/88.tsx
import { useState, ChangeEvent } from "react";
import { uploadFiles } from "../../lib/uploadthing-react";

export default function Upload88() {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);

    setIsUploading(true);
    try {
      // Pass files in an object
      const res = await uploadFiles("imageUploader", { files: fileArray });
      // Use the new ufsUrl property
      const urls = res.map((r) => r.ufsUrl);
      setUploadedUrls((prev) => [...prev, ...urls]);
    } catch (err: any) {
      alert(`Upload error: ${err.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Upload Your Photos</h1>

      <input type="file" multiple onChange={handleSelect} />

      {/* Loading spinner */}
      {isUploading && (
        <div style={{ marginTop: 20 }}>
          <div className="spinner" />
          <span>Uploading…</span>

          {/* Simple CSS for the spinner */}
          <style jsx>{`
            .spinner {
              display: inline-block;
              width: 24px;
              height: 24px;
              margin-right: 8px;
              border: 3px solid rgba(0, 0, 0, 0.2);
              border-radius: 50%;
              border-top-color: rgba(0, 0, 0, 0.6);
              animation: spin 0.6s linear infinite;
            }
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
          `}</style>
        </div>
      )}

      {/* Thumbnails */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          marginTop: 24,
        }}
      >
        {uploadedUrls.map((url) => (
          <img
            key={url}
            src={url}
            alt="Uploaded thumbnail"
            style={{
              width: 100,
              height: 100,
              objectFit: "cover",
              borderRadius: 4,
              border: "1px solid #ddd",
            }}
          />
        ))}
      </div>
    </div>
  );
}