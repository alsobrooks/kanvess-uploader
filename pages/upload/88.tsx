"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing"; // this is index.ts

export default function Upload88() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Upload Your Photos</h2>
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