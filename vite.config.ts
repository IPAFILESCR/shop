import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/shop/",
  plugins: [react()],
  build: {
    outDir: "out",
    emptyOutDir: true,
    sourcemap: false,
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    modulePreload: { polyfill: false },
    target: "es2022",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
          if (id.includes("/src/hooks/")) {
            return "hooks";
          }
          return undefined;
        },
      },
    },
  },
  esbuild: {
    legalComments: "none",
  },
  server: {
    port: 5173,
  },
});
