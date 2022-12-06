const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    "path": require.resolve("path-browserify"),
    "url": require.resolve("url/")
})