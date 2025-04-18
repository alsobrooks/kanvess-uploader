import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "@/lib/uploadthing"; // if your core.ts is in /lib/uploadthing.ts

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});