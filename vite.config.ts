import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from 'vite-plugin-pwa';
import compression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Ashish Kumar Maurya Portfolio',
        short_name: 'AKM Portfolio',
        theme_color: '#ffffff',
        display: 'standalone',
        background_color: '#ffffff',
        start_url: '/',
      }
    })
  ],
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'three'],
  },
});
