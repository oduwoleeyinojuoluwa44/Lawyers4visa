import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "server",
  adapter: vercel(),
  vite: {
    resolve: {
      alias: {
        "@lawyersForvisa/content": "/src/vendor/content/index.ts",
        "@lawyersForvisa/theme/index.css": "/src/vendor/theme/index.css"
      }
    }
  }
});
