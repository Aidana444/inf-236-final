const base = require('./webpack');
const merge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    output: path.resolve(__dirname, '../backend/src/main/resources/static')
};

module.exports = merge(base, {
    output: {
        path: PATHS.output,
        filename: 'built/bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new HtmlWebpackPlugin({
            title: '',
            template: 'public/index.html',
            filename: '../templates/index.html'
        })
    ]
});