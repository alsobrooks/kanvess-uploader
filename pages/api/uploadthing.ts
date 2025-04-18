
// pages/api/uploadthing.ts

// 1️⃣ Use the Pages‑Router helper:
import { createRouteHandler } from "uploadthing/next-legacy";

// 2️⃣ Point up two levels into lib/
import { ourFileRouter } from "../../lib/uploadthing";

export default createRouteHandler({
  router: ourFileRouter,
});

