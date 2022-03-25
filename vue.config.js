const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          // If you are using less-loader@5 please spread the lessOptions to options directly
          modifyVars: {
            'primary-color': '#f90',
            'link-color':'#1890ff',
            'border-radius-base': '2px',
            'layout-header-background': '#134055',
            'menu-dark-inline-submenu-bg':'#134055',
            'layout-trigger-background':'#134055',
          },
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer:{
    host:'x.mp12345.com',
    port:8888,
    proxy:{
      '/api':{
        target:'http://cg.mp12345.com',
        changeOrigin:true
      }
    }
  }
})
