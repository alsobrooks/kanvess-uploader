// pages/upload/88.tsx

import { useState, ChangeEvent } from "react";
import { uploadFiles } from "../../lib/uploadthing-react";

export default function Upload88() {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);

    try {
      // Swap arguments: first the endpoint, then the File[]
      const res = await uploadFiles("imageUploader", fileArray);
      const urls = res.map((r) => r.url);
      setUploadedUrls((prev) => [...prev, ...urls]);
    } catch (err: any) {
      alert(`Upload error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>
      {/* Standard file picker for multiple files */}
      <input type="file" multiple onChange={handleSelect} />

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