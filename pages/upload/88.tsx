import { useState, ChangeEvent } from "react";
import { useUploadThing } from "@uploadthing/react";
import type { OurFileRouter } from "../../lib/uploadthing";

export default function Upload88() {
  // keep track of uploaded URLs
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);
  // get the upload function from UploadThing
  const { startUpload } = useUploadThing<OurFileRouter>();

  // called when user selects files
  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    // convert FileList to an array
    const fileArray = Array.from(files);
    try {
      // upload all of them to the "imageUploader" endpoint
      const res = await startUpload(fileArray, { endpoint: "imageUploader" });
      // extract URLs and add them to state
      const urls = res.map((r) => r.file.url);
      setUploadedUrls((prev) => [...prev, ...urls]);
    } catch (error: any) {
      alert(`Upload error: ${error.message}`);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>

      {/* 1) File picker that allows many files */}
      <input type="file" multiple onChange={handleSelect} />

      {/* 2) Thumbnails */}
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