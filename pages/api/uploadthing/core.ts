import { createUploadthing, type FileRouter } from "uploadthing/server";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .middleware(async () => {
      return { userId: "test-user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete for userId:", metadata.userId);
      console.log("File URL:", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;