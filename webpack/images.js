module.exports = function() {
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'url-loader',
                    options: {
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        }
    };
};