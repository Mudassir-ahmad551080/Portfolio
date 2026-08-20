import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves this project from /Portfolio/.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio/',
  build: {
    sourcemap: false
  }
})
