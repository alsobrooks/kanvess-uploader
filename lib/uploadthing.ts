// lib/uploadthing.ts
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 10,      // ← add this line
    },
  })
    .middleware(async ({ req }) => {
      // … any auth or other checks
      return {};
    })
    .onUploadComplete(async ({ file }) => {
      console.log("Upload complete for:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;