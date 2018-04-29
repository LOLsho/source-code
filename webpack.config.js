const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devServer');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');


PATHS = {
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build')
};


const common = {
    entry: PATHS.src + '/js/index.js',
    output: {
        path: PATHS.build,
        filename: 'js/main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.src + '/index.pug'
        })
    ]
};

module.exports = function() {
    return merge([
        common,
        pug(),
        devServer(),
        sass(),
        css(),
        images(),
        fonts(),
    ]);
};