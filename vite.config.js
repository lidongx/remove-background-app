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
    emptyOutDir: true
  },

  // 服务器配置
  server: {
    port: 3000,
    open: true
  }
} 