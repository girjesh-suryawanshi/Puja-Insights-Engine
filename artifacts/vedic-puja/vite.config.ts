import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const replitPlugins = (process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined)
  ? [
      (await import("@replit/vite-plugin-cartographer")).cartographer({
        root: path.resolve(import.meta.dirname, ".."),
      }),
      (await import("@replit/vite-plugin-dev-banner")).devBanner(),
    ]
  : [];

export default defineConfig(({ mode }) => {
  // Load env file from the root directory (../../)
  const env = loadEnv(mode, path.resolve(import.meta.dirname, "..", ".."), "");

  const rawPort = env.VITE_PORT;

  if (!rawPort) {
    throw new Error(
      "PORT environment variable is required but was not provided in the root .env",
    );
  }

  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  const basePath = env.BASE_PATH;

  if (!basePath) {
    throw new Error(
      "BASE_PATH environment variable is required but was not provided in the root .env",
    );
  }

  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),
      ...replitPlugins,
    ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@assets": path.resolve(import.meta.dirname, "..", "..", "attached_assets"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(import.meta.dirname),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
    server: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
      proxy: {
        "/api": {
          target: "http://localhost:5000",
          changeOrigin: true,
        },
      },
      fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
    preview: {
      port,
      host: "0.0.0.0",
      allowedHosts: true,
    },
  };
});
