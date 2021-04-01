// vue.config.js 
module.exports = { 
    devServer: { 
        proxy: 'https://api.udalost.web:10243/', 
    },
    pwa: {
        workboxOptions: {
          exclude: [/_redirects/]
        }
      }
  };