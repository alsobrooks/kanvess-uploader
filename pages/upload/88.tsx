import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing";

export default function Upload88() {
  return (
    <div>
      <h1>Upload Your Photos</h1>
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          alert("Upload complete!");
          console.log("Files:", res);
        }}
        onUploadError={(error) => {
          alert(`Upload failed. Try again.`);
          console.error("❌ Upload error:", error);
        }}
      />
    </div>
  );
}