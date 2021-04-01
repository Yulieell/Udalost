// vue.config.js 
module.exports = { 
    devServer: { 
        proxy: 'http://localhost:8080/', 
    },
    pwa: {
        workboxOptions: {
          exclude: [/_redirects/]
        }
      }
  };