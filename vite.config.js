import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust this if deploying under a subdirectory (e.g., "/myapp/")
  build: {
    outDir: 'dist',
  },
});
