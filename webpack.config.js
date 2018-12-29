const webpack = require('webpack');
var ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
var HappyPack = require('happypack');

module.exports = {
    entry: {
        app: [
            "./ts/app.tsx"
        ],
        vendors: ['react', 'react-dom', 'react-router-dom', "react-redux", "redux", "redux-saga"],
        l10n: [
            "./ts/l10n/l10n.ts"
        ],
    },
    devServer: {
        contentBase: "./dist"
    },
    output: {
        pathinfo: false,
        filename: '[name].js',
        chunkFilename: '[name].bundle.js',
        path: __dirname + "/dist"
    },
    mode: 'development',
    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".js", ".jsx", ".scss", ".ts", ".tsx"]
    },

    module: {
        rules: [{
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
                // })
            },
            {
                test: /\.tsx?$/,
                use: [{
                    loader: 'happypack/loader?id=ts'
                }],
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        new HappyPack({
            id: 'ts',
            threads: 6,
            loaders: [
                {
                    path: 'ts-loader',
                    query: { 
                        happyPackMode: true,
                        experimentalWatchApi: true,
                        onlyCompileBundledFiles: true,
                        transpileOnly: true,
                    }
                }
            ]
        }),
        new ForkTsCheckerWebpackPlugin({
            tslint: true,
            options: {
                onlyCompileBundledFiles: true,
                checkSyntacticErrors: true
            }
        })
    ]
};