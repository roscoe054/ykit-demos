var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        view1: './app/view1/index.js',
        view2: './app/view2/index.js',
        view3: './app/view3/index.js',
        vendor: ['react', 'react-router']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    ],
    devServer: {
        port: 3000
    }
};
