export default {
  // 基本公共路径
  base: '/',
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    // 生成 sourcemap
    sourcemap: false,
    // 压缩选项
    minify: 'terser',
    // 清空输出目录
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'sitemap.xml'),
        contact: resolve(__dirname, 'robots.txt')
        // 可以继续添加更多页面
      }
  },

  // 服务器配置
  server: {
    port: 3000,
    open: true
  }
} 