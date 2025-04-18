// pages/upload/88.tsx

import { useState, ChangeEvent } from "react";
// 🛠️ Pull in your local hook, not from @uploadthing/react directly
import { useUploadThing } from "../../lib/uploadthing-react";
import type { OurFileRouter } from "../../lib/uploadthing";

export default function Upload88() {
  // 1) State to hold uploaded URLs
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  // 2) Get the startUpload function for your "imageUploader" endpoint
  const { startUpload } = useUploadThing("imageUploader", {
    onClientUploadComplete: (res) => {
      // res is an array of uploaded-file info
      // the URL for each file is res[i].file.url OR res[i].url
      const urls = res.map((r) => r.url ?? (r as any).file.url);
      setUploadedUrls((prev) => [...prev, ...urls]);
    },
    onUploadError: (err) => {
      alert(`Upload error: ${err.message}`);
    },
  });

  // 3) When the user picks files, kick off the upload
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) startUpload(Array.from(files));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>

      {/* file picker that allows many */}
      <input type="file" multiple onChange={handleChange} />

      {/* thumbnails */}
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