var CompressionWebpackPlugin = require('compression-webpack-plugin');
var webpackMerge = require('webpack-merge');
var webpackCommon = require('./webpack.common');

module.exports= webpackMerge(webpackCommon, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CompressionWebpackPlugin({
            algorithm: 'brotliCompress',
            filename: '[path].br'
        })
    ]
});