/**
 * Настройки для запуска webpack-dev-server
 */
module.exports = () => {
    return {
        devServer: {
            stats: 'errors-only',
            port: 9000
        }
    }
};