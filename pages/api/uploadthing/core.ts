import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./index";

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});