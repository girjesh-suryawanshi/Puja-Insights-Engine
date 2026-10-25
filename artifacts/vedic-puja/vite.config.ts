import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { VitePWA } from "vite-plugin-pwa";

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

  const rawPort = env.VITE_PORT || "5173";
  const port = Number(rawPort);

  if (Number.isNaN(port) || port <= 0) {
    throw new Error(`Invalid PORT value: "${rawPort}"`);
  }

  const basePath = env.BASE_PATH || "/";


  return {
    base: basePath,
    plugins: [
      react(),
      tailwindcss(),
      runtimeErrorOverlay(),
      ...replitPlugins,
      VitePWA({
        registerType: "autoUpdate",
        includeAssets: ["favicon.svg", "opengraph.jpg", "pwa-192x192.png", "pwa-512x512.png"],
        workbox: {
          globPatterns: ["**/*.{js,css,html,ico,webp,avif,svg,woff,woff2}"],
          // Exclude raw PNGs from precache — WebP versions are served instead
          globIgnores: ["**/images/**/*.png", "**/images/**/*.jpg", "**/images/**/*.jpeg"],
          maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-stylesheets",
                expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: "CacheFirst",
              options: {
                cacheName: "google-fonts-webfonts",
                expiration: { maxEntries: 20, maxAgeSeconds: 60 * 60 * 24 * 365 },
                cacheableResponse: { statuses: [0, 200] },
              },
            },
          ],
        },
        manifest: {
          name: "Radhe Radhe Puja - North Indian Pandit Bangalore",
          short_name: "Radhe Puja",
          description: "Book experienced Hindi-speaking pandits for authentic North Indian pujas and Vedic rituals in Bangalore.",
          theme_color: "#f97316",
          background_color: "#ffffff",
          display: "standalone",
          scope: "/",
          start_url: "/",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
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
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // React core
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // Routing
          if (id.includes('node_modules/wouter')) {
            return 'router';
          }
          // Data fetching
          if (id.includes('node_modules/@tanstack/react-query')) {
            return 'query';
          }
          // Animations
          if (id.includes('node_modules/framer-motion')) {
            return 'motion';
          }
          // All Radix UI primitives together
          if (id.includes('node_modules/@radix-ui/')) {
            return 'ui-radix';
          }
          // Icons
          if (id.includes('node_modules/lucide-react')) {
            return 'icons';
          }
          // Forms & validation
          if (id.includes('node_modules/react-hook-form') ||
              id.includes('node_modules/@hookform/') ||
              id.includes('node_modules/zod')) {
            return 'forms';
          }
          // Charts
          if (id.includes('node_modules/recharts')) {
            return 'charts';
          }
        },
      },
    },
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
