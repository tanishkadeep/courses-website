import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';
import type { Plugin } from 'vite';
import type { RequestHandler } from 'express';

// Custom plugin to add middleware
const historyApiFallbackPlugin = (): Plugin => ({
  name: 'history-api-fallback',
  configureServer(server) {
    // Use any type assertion to resolve type incompatibility
    const middleware = history({
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    }) as unknown as any;

    server.middlewares.use(middleware);
  },
});

export default defineConfig({
  plugins: [react(), historyApiFallbackPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
});
