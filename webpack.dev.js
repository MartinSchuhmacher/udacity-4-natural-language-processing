const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// necessary syntax due to documentation for CleanWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// add Workbox for working with Service Workers
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './src/client/index.js',
    output: {
        libraryTarget: 'var',
        library: 'Client',
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    stats: 'verbose',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
        new WorkboxPlugin.GenerateSW()
    ],
    // prodividing proxy for communication during dev mode with backend server on 8081
    devServer: {
        open: true,
        proxy: {
            '/article': 'http://localhost:8081',
            '/all': 'http://localhost:8081'
        }
    }
}