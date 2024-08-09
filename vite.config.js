import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process', 'util', 'stream', 'events'],
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
  resolve: {
    alias: {
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  define: {
    global: 'globalThis',
  },
})