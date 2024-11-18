import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the output directory is 'dist' inside the frontend folder
  },
  base: '/',  // This will ensure the base path is set correctly for your production build
});
