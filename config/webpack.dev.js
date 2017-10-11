var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var util = require('./util');

module.exports = webpackMerge(commonConfig, {
    devtool: 'eval-source-map',
    entry: {
        'vendor': ['react', 'react-dom', 'react-router-dom', 'rxjs'],
        //'vendor': './src/vendor.js',
        'app': './src/index.js'
    },
    output: {
        path: util.root('dist'),
        publicPath: 'http://localhost:8080',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
        //filename: '[name].js',
        //chunkFilename: '[id].chunk.js'
    },
    devServer: {
        historyApiFallback: true, //allow deep linking to routes
        stats: 'minimal'
    }
});