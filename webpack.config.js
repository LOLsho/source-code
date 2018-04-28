const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devServer = require('./webpack/devServer');
const css = require('./webpack/css');
const sass = require('./webpack/sass');
const images = require('./webpack/images');


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
    ]);
};


// module.exports = {
//     entry: PATHS.src + '/js/index.js',
//     output: {
//         path: PATHS.build,
//         filename: 'main.js'
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: PATHS.src + '/index.pug'
//         })
//     ],
//     devServer: {
//         // stats: 'errors-only',
//         port: 9000
//     },
//     module: {
//         rules: [{
//             test: /\.scss$/,
//
//             use: [{
//                 loader: 'style-loader'
//             }, {
//                 loader: 'css-loader'
//             }, {
//                 loader: 'sass-loader'
//             }]
//         }, {
//             test: /\.pug$/,
//             loader: 'pug-loader',
//             options: {
//                 pretty: true
//             }
//         }]
//     }
// };