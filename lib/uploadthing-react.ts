// lib/uploadthing-react.ts

import { generateReactHelpers } from "@uploadthing/react";
import type { OurFileRouter } from "./uploadthing";

// This gives you a typed hook (useUploadThing) to call your endpoints
export const { useUploadThing } = generateReactHelpers<OurFileRouter>();