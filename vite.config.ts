import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    ...tanstackStart({
      server: { entry: "server" },
    }),
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    react(),
    ...nitro({ defaultPreset: "cloudflare-module" }),
  ],
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": new URL("./src", import.meta.url).pathname },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
});
