var config = require("./webpack.config")
var webpack = require("webpack")

// config.module.rules.push({
//     test: /\.js$/,
//     loader: "babel-loader?cacheDirectory=true"
// })
config.devtool = false
// config.optimization = {

//     splitChunks: {
//         chunks: 'async',
//         minSize: 3000,
//         maxSize: 0,
//         minChunks: 1,
//         maxAsyncRequests: 500,
//         maxInitialRequests: 3,
//         automaticNameDelimiter: '~',
//         name: true,
//         cacheGroups: {
//             vendors: {
//                 test: /[\\/]node_modules[\\/]/,
//                 priority: -10
//             },
//             default: {
//                 minChunks: 2,
//                 priority: -20,
//                 reuseExistingChunk: true
//             }
//         }
//     }

// }
config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
]
config.mode = 'production'

module.exports = config