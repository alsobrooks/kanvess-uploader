import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "../uploadthing"; // ✅ note: this path is correct now

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});