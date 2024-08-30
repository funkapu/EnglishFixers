import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this if your app is served from a subdirectory
  build: {
    outDir: 'build', // Ensure this matches your deployment settings
    rollupOptions: {
      output: {
        // Customize the output directory structure if needed
      }
    }
  }
});
