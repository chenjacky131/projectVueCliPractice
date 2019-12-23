module.exports = {
  devServer: {
    proxy: {// 配置代理转发
      '/api': {
        target: 'http://127.0.0.1:9090',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/variables.scss";`// 原来的sass-loader v7中用data
      }
    }
  }
}
