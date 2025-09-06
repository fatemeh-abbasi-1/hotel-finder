import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import hotel from "./sanity/schemas/hotel";

export default defineConfig({
  name: "default",
  title: "Hotel",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  plugins: [deskTool(), visionTool()],
  schema: {
    types: [hotel],
  },
});
