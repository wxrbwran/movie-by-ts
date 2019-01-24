
console.log(`${process.env.NODE_ENV}`);
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.mjs', '.js', '.jsx', 'css',
              '.vue', '.json', '.wasm', 'ts'],
        },
    },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://api.douban.com/v2',
        changeOrigin: true,
        ws: true,
        //一定要加上这个！！！！不然不能跨域！
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
}

