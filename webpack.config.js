const path = require('path');
const webpack = require('webpack');
module.exports = {
    entry: './src/client/index.js',
    // show orphan modules for debuging
    stats: {orphanModules: true},
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
}