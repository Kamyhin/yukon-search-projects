/**
 * Настройки для запуска webpack-dev-server
 */
module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 9000
        }
    }
};