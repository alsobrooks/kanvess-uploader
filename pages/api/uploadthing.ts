// pages/api/uploadthing.ts
import { createUploadthing, type FileRouter } from "uploadthing/server";
import type { NextApiRequest, NextApiResponse } from "next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
