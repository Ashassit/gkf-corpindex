import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  server: {
    watch: {
      ignored: ["**/.claude/**", "**/node_modules/**"],
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-framer": ["framer-motion"],
          "vendor-supabase": ["@supabase/supabase-js"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-alert-dialog",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
            "@radix-ui/react-tooltip",
          ],
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",

      devOptions: {
        enabled: false, // disabled in dev — SW intercepts all requests and slows HMR
      },

      // Prevent the service worker from treating /newsletters/* as navigation
      // and serving index.html (which breaks PDF downloads in production).
      workbox: {
        // Serve index.html for all SPA routes except /newsletters/
        navigateFallback: "index.html",
        navigateFallbackDenylist: [/^\/newsletters\//],
        runtimeCaching: [
          {
            urlPattern: /^\/newsletters\//,
            handler: "NetworkOnly",
            options: {
              cacheName: "newsletters",
            },
          },
        ],
      },

      manifest: {
        name: "GKF - Gift Life",
        short_name: "GKF",
        description: "Gift Life",
        start_url: "/",
        display: "standalone",
        background_color: "#080808",
        theme_color: "#FF6B35",
        icons: [
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
