// pages/api/uploadthing/core.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./index"; // This imports what you wrote above

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});