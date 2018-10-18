
module.exports = {
    entry: {
        app: [
            "./ts/app.tsx"
        ]
    },
    devServer: {
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
        extensions: [".js", ".jsx", ".scss", ".ts", ".tsx"]
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
                loader: "babel-loader",
                options: {
                    // This is a feature of `babel-loader` for webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                },
            }
        ]
    },
    //  plugins: [
    //     new ForkTsCheckerWebpackPlugin({tslint: true})
    //  ]
};