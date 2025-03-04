import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { reactRouter } from "@react-router/dev/vite"

export default defineConfig({
  // plugins: [react()],
  plugins: [reactRouter()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    open: true,
    allowedHosts: ["n4py8j-3001.csb.app"]
  },
  preview: {
    allowedHosts: ["n4py8j-4173.csb.app"]
  },
  ssr: {
    noExternal: ["antd-mobile"]
  }
})
