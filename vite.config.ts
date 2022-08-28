import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//@ts-ignore
import checker from 'vite-plugin-checker'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    checker({ eslint: { lintCommand: 'eslint src' } })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: true,
  },
  base: './'
})
