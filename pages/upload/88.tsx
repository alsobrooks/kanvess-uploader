"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing";

export default function Upload88() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Upload up to 88 Photos</h2>
      <UploadButton<OurFileRouter>
        endpoint="kanvessUploader"
        onClientUploadComplete={(res) => {
          console.log("Files uploaded:", res);
          alert("Upload complete!");
        }}
        onUploadError={(error) => {
          alert(`Upload failed: ${error.message}`);
        }}
      />
    </div>
  );
}
