import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Set the port to 5173
    host: '0.0.0.0',  // Ensure it binds to all network interfaces
    allowedHosts:['frontendpartarif.onrender.com']
  },
      // allowedHosts: ['']
});
