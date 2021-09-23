// vue.config.js

"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: "vue3-premissions-template",
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
};
