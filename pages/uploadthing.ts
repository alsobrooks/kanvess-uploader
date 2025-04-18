import { createUploadthing, type FileRouter } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
  kanvessUploader: f({
    image: { maxFileCount: 88, maxFileSize: "8MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("Uploaded file:", file.url);
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

export default uploadthingNextHandler({
  router: ourFileRouter,
});
