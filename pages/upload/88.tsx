"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing";

export default function Upload88() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Upload up to 88 Photos
      </h2>

      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        multiple={true}
        onClientUploadComplete={(res) => {
          alert("Upload complete!");
        }}
        onUploadError={(error) => {
          alert("Upload failed. Try again.");
        }}
      />
    </div>
  );
}