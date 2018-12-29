var config = require("./webpack.config")
var webpack = require("webpack")

config.devtool = false
config.module.rules = [{
        test: /\.scss$/,
        use: [{
                loader: 'style-loader'
            },
            {
                loader: 'css-loader?sourceMap&importLoaders=1'
            },
            {
                loader: 'postcss-loader?sourceMap'
            },
            {
                loader: 'sass-loader?sourceMap'
            }
        ]
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{
            loader: 'ts-loader',
            options: {
                onlyCompileBundledFiles: true,

            }
        }],
    }
]

config.plugins = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    }),
]
config.mode = 'production'

module.exports = config