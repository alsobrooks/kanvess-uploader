import { useState } from "react";
import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../../lib/uploadthing";

export default function Upload88() {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>

      <UploadButton<OurFileRouter, "imageUploader", true>
        endpoint="imageUploader"
        multiple
        onClientUploadComplete={(res) => {
          const urls = res.map((r) => r.file.url);
          setUploadedUrls((prev) => [...prev, ...urls]);
        }}
        onUploadError={(error) => {
          alert(`Upload error: ${error.message}`);
        }}
      />

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