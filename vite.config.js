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
            src: 'icons/icon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            src: 'icons/icon-24x24.png',
            sizes: '24x24',
            type: 'image/png',
          },
          {
            src: 'icons/icon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            src: 'icons/icon-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'icons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
        screenshots: [
          {
            src: 'screens/wide-screen-1.png',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screens/wide-screen-2.png',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screens/wide-screen-3.png',
            sizes: '640x480',
            type: 'image/png',
            form_factor: 'wide',
          },
          {
            src: 'screens/narrow-screen-1.png',
            sizes: '320x480',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: 'screens/narrow-screen-2.png',
            sizes: '320x480',
            type: 'image/png',
            form_factor: 'narrow',
          },
          {
            src: 'screens/narrow-screen-3.png',
            sizes: '320x480',
            type: 'image/png',
            form_factor: 'narrow',
          }
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