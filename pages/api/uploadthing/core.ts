// pages/api/uploadthing/core.ts

import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./uploadthing"; // ✅ correct import path

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});