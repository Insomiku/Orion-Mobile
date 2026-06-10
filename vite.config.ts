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
      "@tauri-apps/api/core": path.resolve(__dirname, "./src/core/tauri-mock.ts"),
    },
  },
  server: {
    port: 5173,
  },
})
