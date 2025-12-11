import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // نام مخزن شما باید در اینجا قرار گیرد تا مسیرها درست کار کنند
  base: '/hessamsafari.github.io/',
  build: {
    outDir: 'dist',
  }
});