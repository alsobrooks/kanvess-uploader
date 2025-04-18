// lib/uploadthing-react.ts
import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "./uploadthing";

// This gives you a typed hook and uploadFiles fn
export const { useUploadThing, uploadFiles } =
  generateReactHelpers<OurFileRouter>();