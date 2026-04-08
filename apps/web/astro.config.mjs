import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@lawyersForvisas/content": "/src/vendor/content/index.ts",
        "@lawyersForvisas/theme/index.css": "/src/vendor/theme/index.css"
      }
    }
  }
});
