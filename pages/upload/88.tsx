"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing/core";

export default function Upload88() {
  return (
    <div style={{ padding: 40 }}>
      <h2>Upload up to 88 Photos</h2>
      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          alert("Upload complete!");
          console.log("Files:", res);
        }}
        onUploadError={(error) => {
          alert(`Error: ${error.message}`);
        }}
      />
    </div>
  );
}