var config = require("./webpack.config")
var webpack = require("webpack")

config.module.rules.push({
    test: /\.js$/,
    loader: "babel-loader?cacheDirectory=true"
})
config.devtool = false


config.mode = 'production'

module.exports = config