import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        short_name: 'BollyQuiz',
        name: 'Bolly Quiz',
        icons: [
          {
            src: 'icons/icon-16x16.jpg',
            sizes: '16x16',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-24x24.jpg',
            sizes: '24x24',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-32x32.jpg',
            sizes: '32x32',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-64x64.jpg',
            sizes: '64x64',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-144x144.jpg',
            sizes: '144x144',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-192x192.jpg',
            sizes: '192x192',
            type: 'image/jpeg',
          },
          {
            src: 'icons/icon-512x512.jpg',
            sizes: '512x512',
            type: 'image/jpeg',
          },
        ],
        start_url: '.',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
    }),
  ],
  base: './',
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
  },
  logLevel: 'debug', // Add this line for more detailed logging
});