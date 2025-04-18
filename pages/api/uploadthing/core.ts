import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./index"; // ✅ this is now correct

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});