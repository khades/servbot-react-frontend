// var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require("webpack")

module.exports = {
    entry: {
        app: [
            "./ts/app.tsx"
        ]
    },
    devServer: {
        inline: true,
        hot: true,
        contentBase: "./dist"
    },
    output: {
        filename: "app.js",
        chunkFilename: '[name].bundle.js',
        path: __dirname + "/dist"
    },
    mode: 'development',
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx",".scss", ".ts", ".tsx"]
    },

    module: {
        rules: [{
                test: /\.scss$/,
                // use: ExtractTextPlugin.extract({
                //    fallback: "style-loader",
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
                // })
            },
            {
                test: /\.tsx?$/,
                loader: "babel-loader?cacheDirectory=true"
            }
        ]
    },
    plugins: [
        // new ExtractTextPlugin({
        //     filename: 'style.css',
        //     allChunks: true
        // }),
        new webpack.HotModuleReplacementPlugin()

    ]
};