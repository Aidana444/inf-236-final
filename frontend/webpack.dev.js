const base = require('./webpack');
const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATHS = {
    output: path.resolve(__dirname, '/build')
};

console.log(PATHS)

module.exports = merge(base, {

    output: {
        path: PATHS.output,
        filename: 'bundle.js'
    },

    devServer: {
        port: 3000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                secure: false,
                prependPath: false
            }
        },
        publicPath: 'http://localhost:3000/',
        historyApiFallback: true

    },
    devtool: 'inline-source-map',

    plugins: [
        new HtmlWebpackPlugin({
            title: '',
            template: 'public/index.html',
            filename: 'index.html'
        })
    ]
});

