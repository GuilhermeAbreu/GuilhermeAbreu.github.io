import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://guilhermeabreu.github.io",
  vite: { plugins: [tailwindcss()] },
});
