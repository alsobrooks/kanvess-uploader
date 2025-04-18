// pages/api/uploadthing/core.ts
import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./index"; // <— this must point to the router

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});