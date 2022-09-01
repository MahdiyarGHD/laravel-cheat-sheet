const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
        scss: {
            additionalData: `@import "./src/assets/styles/app.scss";`
        }
    },

}
})
