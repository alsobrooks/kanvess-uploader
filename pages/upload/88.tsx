// pages/upload/88.tsx
import { useState, ChangeEvent } from "react";
import { useUploadThing } from "../../lib/uploadthing-react";
import type { OurFileRouter } from "../../lib/uploadthing";

export default function Upload88() {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      // res is an array of { file } entries
      const urls = res.map((r) => r.file.url);
      setUploadedUrls((prev) => [...prev, ...urls]);
    },
    onUploadError: (err) => {
      alert(`Upload error: ${err.message}`);
    },
  });

  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) startUpload(Array.from(files));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>

      {/* 1) Pick as many as you like */}
      <input type="file" multiple onChange={handleSelect} />

      {/* 2) Show thumbnails */}
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