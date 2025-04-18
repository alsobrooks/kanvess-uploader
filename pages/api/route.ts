import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "../../../lib/uploadthing"; // ✅ Use RELATIVE path

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});