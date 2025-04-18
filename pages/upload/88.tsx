import { useState, ChangeEvent } from "react";
import { uploadFiles } from "../../lib/uploadthing-react";

export default function Upload88() {
  const [uploadedUrls, setUploadedUrls] = useState<string[]>([]);

  const handleSelect = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileArray = Array.from(files);

    try {
      // ← pass an object with `files: File[]`
      const res = await uploadFiles("imageUploader", { files: fileArray });

      // each `r` has a `.url` property
      const urls = res.map((r) => r.url);
      setUploadedUrls((prev) => [...prev, ...urls]);
    } catch (err: any) {
      alert(`Upload error: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>

      {/* native picker with multiple support */}
      <input type="file" multiple onChange={handleSelect} />

      {/* render thumbnails */}
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