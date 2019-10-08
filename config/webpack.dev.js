var webpackMerge = require('webpack-merge');
var webpackCommon = require('./webpack.common');

module.exports= webpackMerge(webpackCommon, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        port: 9000
    }
});