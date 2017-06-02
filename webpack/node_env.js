const webpack = require('webpack');


module.exports = env => {
    return {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(env)
            })
        ]
    }
};