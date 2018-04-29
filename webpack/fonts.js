module.exports = function (paths) {
    return {
        module: {
            rules: [{
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: "file-loader",
                options: {
                    name: "fonts/[name].[ext]",
                },
            }]
        }
    };
};