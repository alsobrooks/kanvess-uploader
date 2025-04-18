import { ourFileRouter } from "./uploadthing"; // not '../uploadthing'
import { ourFileRouter } from "../uploadthing"; // ✅ note: this path is correct now

export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});