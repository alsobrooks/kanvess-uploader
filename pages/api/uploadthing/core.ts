import { createNextRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./index"; // assumes your main router is in uploadthing/index.ts or uploadthing.ts

export const { GET, POST } = createNextRouteHandler({
  router: ourFileRouter,
});