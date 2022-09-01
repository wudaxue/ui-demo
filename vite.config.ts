import { defineConfig } from 'vite'
import path, { resolve }  from 'path'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${path.resolve(__dirname, './src')}/`
    }
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    vue(),
    eslintPlugin(),
  ]
})
