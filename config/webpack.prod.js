var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var util = require('./util');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-source-map',
    entry: {
        'vendor': ['react', 'react-dom', 'react-router-dom', 'rxjs'],
        'app': './src/index.js'
    },
    output: {
        path: util.root('dist/prod'),
        publicPath: '/',
        filename: '[name].[chunkhash].js',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compressor: {
                drop_console: true
            },
            mangle: {
                keep_fnames: true //keeping fnames like this will break sjcl?
            },
            output: {
                comments: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify(ENV), //set react in production mode
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});