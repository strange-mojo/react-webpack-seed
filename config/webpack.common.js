var webpack = require('webpack');
var util = require('./util');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // will process both .js and .jsx files
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: { // no need for .babelrc
                    presets: ['env', 'react']
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'],
            minChunks: Infinity
        })
    ]
}