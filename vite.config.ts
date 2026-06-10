import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@orion/core": path.resolve(__dirname, "./src/core"),
    },
  },
  server: {
    port: 5173,
  },
})
