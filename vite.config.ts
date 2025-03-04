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
    open: true
  },
  ssr: {
    noExternal: ["antd-mobile"]
  }
})
