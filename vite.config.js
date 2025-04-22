import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  base: '/',
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'sitemap.xml',
          dest: '' // 复制到 dist 根目录
        }
      ]
    })
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        help: resolve(__dirname, 'googleff03b3026faa6312.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
})