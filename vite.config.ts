import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
        type: 'module',
      },
      includeAssets: ['assets/*'],
      manifest: {
        short_name: 'Dango',
        name: 'Dango Web',
        icons: [
          {
            src: 'assets/favicon.ico',
            sizes: '64x64 32x32 24x24 16x16',
            type: 'image/x-icon',
          },
          {
            src: 'assets/logo192.png',
            type: 'image/png',
            sizes: '192x192',
          },
          {
            src: 'assets/logo512.png',
            type: 'image/png',
            sizes: '512x512',
          },
          {
            src: 'assets/android-icon-36x36.png',
            sizes: '36x36',
            type: 'image/png',
          },
          {
            src: 'assets/android-icon-48x48.png',
            sizes: '48x48',
            type: 'image/png',
          },
          {
            src: 'assets/android-icon-72x72.png',
            sizes: '72x72',
            type: 'image/png',
          },
          {
            src: 'assets/android-icon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: 'assets/android-icon-144x144.png',
            sizes: '144x144',
            type: 'image/png',
          },
          {
            src: 'assets/android-icon-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
        start_url: '/',
        display: 'standalone',
        theme_color: '#000000',
        background_color: '#ffffff',
      },
      workbox: {
        // defining cached files formats
        globPatterns: ['**/*.{tsx,ts,js,css,html,ico,png,svg,webmanifest}'],
      },
    }),
  ],
});
