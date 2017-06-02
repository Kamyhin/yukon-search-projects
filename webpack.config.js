const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const devserver = require('./webpack/devserver');
const node_env = require('./webpack/node_env');


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
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [/node_modules/],
                    loader: "babel-loader",
                    query: {
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.ejs'
            })
        ]
    }
]);

module.exports = env => {
    if (env === 'production') {
        return merge([
            common,
            node_env(env)
        ]);
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            node_env(env)
        ])
    }
};
