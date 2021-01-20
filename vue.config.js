module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        network: '@/network',
        pages: '@/pages',
        storage: '@/storage',
        utils: '@/utils'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://mall-pre.springboot.cn',
        // 将主机的点设置为 原点
        changeOrigin: true,
        // 将api路径设置为空
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
