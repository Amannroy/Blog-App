import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Ensure the build output is 'dist'
  },
  base: '/'  // This ensures that the app works correctly when deployed in the root of your domain
})
