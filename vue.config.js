// vue.config.js
'use strict'
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'vue3-premissions-template',
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }

  },
  chainWebpack: config => {
    config.module
      .rule('svg') // 内置规则名称
      .exclude.add(resolve('src'))
      .end()
    config.module
      .rule('myIcons') // 自定义规则名称
      .test(/\.svg$/)
      .include.add(resolve('src/components/Icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  },
  devServer: {
    port: 4000
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        // 所以这里假设你有 `src/variables.sass` 这个文件
        // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
        data: `@use "@/styles/elementPlus/var.scss" as *;`
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      scss: {
        data: `@use "@/styles/elementPlus/var.scss" as *;`
      }
    }
  }
  //   // set svg-sprite-loader

}
