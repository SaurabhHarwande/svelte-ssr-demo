const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    resolve: {
        alias: {
            svelte: path.resolve('node_modules', 'svelte')
        },
        extensions: ['.mjs', '.js', '.svelte'],
        mainFields: ['svelte', 'browser', 'module', 'main']
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output Management'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false
        })
    ],
    module: {
        rules: [{
            test: /\.(html|svelte)$/,
            exclude: /node_modules/,
            use: {
                loader: 'svelte-loader',
                options: {
                    hydratable: true,
                    emitCss: true,
                    generate: 'ssr'
                }
            }
        }, {
            test: /\.(sa|sc|c)ss$/,
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                    publicaPath: '../',
                    hmr: process.env.NODE_ENV === 'development'
                }
            }, {
                loader: 'css-loader',
                options: {
                    sourceMap: true
                }
            }]
        }]
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, './../dist')
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
};