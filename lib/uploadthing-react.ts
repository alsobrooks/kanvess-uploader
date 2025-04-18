import { generateReactHelpers } from "@uploadthing/react";
// This line MUST point to the router file in the same folder:
import type { OurFileRouter } from "./uploadthing";

export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();