import { sentryVitePlugin } from "@sentry/vite-plugin";
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [tailwindcss(), react(), sentryVitePlugin({
    org: "jsm-jjn",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})