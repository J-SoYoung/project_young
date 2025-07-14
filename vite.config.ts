import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/routers": path.resolve(__dirname, "src/routers"),
      "@/shared/apis": path.resolve(__dirname, "src/shared/apis"),
      "@/shared/components": path.resolve(__dirname, "src/shared/components"),
      "@/shared/hooks": path.resolve(__dirname, "src/shared/hooks"),
      "@/shared/service": path.resolve(__dirname, "src/shared/service"),
      "@/shared/types": path.resolve(__dirname, "src/shared/types"),
      "@/shared/utils": path.resolve(__dirname, "src/shared/utils")
    }
    // [
    //   { find: "@/", replacement: "src" },
    //   { find: "@/pages", replacement: "src/pages" },
    //   { find: "@/routers", replacement: "src/routers" },
    //   { find: "@/assets", replacement: "src/assets" },
    //   { find: "@/shared/apis", replacement: "src/shared/apis" },
    //   { find: "@/shared/components", replacement: "src/shared/components" },
    //   { find: "@/shared/hooks", replacement: "src/shared/hooks" },
    //   { find: "@/shared/service", replacement: "src/shared/service" },
    //   { find: "@/shared/types", replacement: "src/shared/types" },
    //   { find: "@/shared/utils", replacement: "src/shared/utils" }
    // ]
  }
});
