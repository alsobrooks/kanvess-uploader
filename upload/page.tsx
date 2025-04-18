"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "@/lib/uploadthing";

export default function UploadPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Upload Your Photos</h1>
      <UploadButton<OurFileRouter>
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          alert("Upload complete!");
          console.log("Uploaded files:", res);
        }}
        onUploadError={(error: Error) => {
          alert(`Upload failed: ${error.message}`);
        }}
      />
    </div>
  );
}