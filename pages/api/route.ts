import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/lib/uploadthing"; // adjust if needed

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});