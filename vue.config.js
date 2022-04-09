const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,         //关闭语法检查
  //配置代理服务器，端口号与需要访问的服务器端口号一致
  //方式一
  // devServer: {
  //   proxy: 'http://localhost:5000'
  // }

  //方式二
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:5000',
  //       pathRewrite: { '^/api': '' },  //使用正则表达式匹配所有的/api为''才能匹配到服务器的准确路径
  //       ws: true,  //用于支持websocket
  //       changeOrigin: true   //用于控制请求头中的host值
  //     },
  //     // '/foo': {
  //     //   target: '<other_url>'
  //     // }
  //     '/demo': {
  //       target: 'http://localhost:5001',
  //       pathRewrite: { '^/demo': '' },  //使用正则表达式匹配所有的/api为''才能匹配到服务器的准确路径
  //       ws: true,  //用于支持websocket
  //       changeOrigin: true   //用于控制请求头中的host值
  //     },
  //   }
  // }
})


