const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production' ? "./" : "/",
    outputDir: '../dist',
    pages: {
      main: {
          entry: 'src/main.js',
          template: 'public/main.html',
          filename: 'main.html',
          title: 'AnimatedRecycleBin',
      },
      pop: 'src/pop/main.js'
    },
    devServer: {
        open: ['/main.html', '/pop.html'],
        host: "localhost",
        port: 8888
    }
})
