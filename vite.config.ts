import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/routers", replacement: "/src/routers" },
      { find: "@/shared/components", replacement: "/src/shared/components" },
      { find: "@/shared/hooks", replacement: "/src/shared/hooks" },

    ]
  },
});
