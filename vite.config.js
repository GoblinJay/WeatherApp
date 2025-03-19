import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['0ecc2a1b-3743-4a67-81ec-7d989a69942d-00-2p2pb6xkinjnw.janeway.replit.dev'],
  },
  proxy: {
    '/api': {
      target: 'http://0.0.0.0:3001',
      changeOrigin: true
    }
  }
});