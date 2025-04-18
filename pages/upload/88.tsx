import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../../lib/uploadthing";

export default function Upload88() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Upload Your Photos</h1>
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          alert("Upload complete!");
          console.log(res);
        }}
        onUploadError={(error) => {
          alert(`Upload error: ${error.message}`);
        }}
      />
    </div>
  );
}