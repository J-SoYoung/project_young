import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: [
      { find: "@/", replacement: "/src" },
      { find: "@/pages", replacement: "/src/pages" },
      { find: "@/routers", replacement: "/src/routers" },
      { find: "@/shared/apis", replacement: "/src/shared/apis" },
      { find: "@/shared/components", replacement: "/src/shared/components" },
      { find: "@/shared/hooks", replacement: "/src/shared/hooks" },
      { find: "@/shared/service", replacement: "/src/shared/service" },
      { find: "@/shared/types", replacement: "/src/shared/types" },
      { find: "@/shared/utils", replacement: "/src/shared/utils" },
    ]
  }
});
