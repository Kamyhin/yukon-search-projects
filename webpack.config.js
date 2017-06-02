const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');


const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: PATHS.source + '/index.js',
        output: {
            path: PATHS.build,
            filename: './build.js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.ejs'
            })
        ]
    }
]);

module.exports = function (env) {
    if (env === 'production') {
        return merge([
            common
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver()
        ])
    }
};
