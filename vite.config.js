import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs'

export default defineConfig({
  plugins: [react(), commonjs()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  define: {
    global: 'window',
  },
})