var config = require("./webpack.config")
var webpack = require("webpack")

config.devtool = false

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
]
config.mode = 'production'

module.exports = config