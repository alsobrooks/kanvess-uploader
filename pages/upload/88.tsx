"use client";

import { UploadButton } from "@uploadthing/react";
import type { OurFileRouter } from "../api/uploadthing";

export default function Upload88() {
  return (
    <div style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h2 style={{ fontSize: "2rem", marginBottom: "20px" }}>
        Upload Your Photos
      </h2>

      <UploadButton<OurFileRouter, "imageUploader">
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          console.log("✅ Upload complete:", res);
          alert("✅ Upload complete!");
        }}
        onUploadError={(error) => {
          console.error("❌ Upload error:", error);
          alert("❌ Upload failed. Try again.");
        }}
      />
    </div>
  );
}