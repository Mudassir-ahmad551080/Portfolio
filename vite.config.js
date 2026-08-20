import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  base: '/Portfolio/',
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        // Avoid filenames starting with '-' which combined with the default
        // '-' separator produces "--" — GitHub Pages CDN mishandles those
        // paths (404 even though the file exists in the branch).
        entryFileNames: 'assets/[name]_[hash].js',
        chunkFileNames: 'assets/[name]_[hash].js',
        assetFileNames: 'assets/[name]_[hash][extname]'
      }
    }
  }
})
