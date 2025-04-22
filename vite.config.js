import { defineConfig } from 'vite'
import { resolve } from 'path'
import fs from 'fs'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    port: 3000,
    open: true
  },
  // 自定义构建钩子，把静态文件复制过去
  plugins: [
    {
      name: 'copy-static-files',
      buildEnd() {
        const filesToCopy = ['sitemap.xml', 'robots.txt',"googleff03b3026faa6312.html"]
        for (const file of filesToCopy) {
          fs.copyFileSync(resolve(__dirname, file), resolve(__dirname, 'dist', file))
        }
      }
    }
  ]
})