import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/r3f-offscreen/",
  plugins: [react({ fastRefresh: false })],
  worker: {
    plugins: [react({ fastRefresh: false })],
  },
  build: {
    outDir: "./docs",
  },
});
