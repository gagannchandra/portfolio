// @ts-check
import { defineConfig } from "astro/config";
// @ts-ignore - tailwind vite plugin type mismatch is a known cosmetic issue
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://gagannchandra.vercel.app",
  vite: {
    plugins: [tailwindcss()],
  },
});
