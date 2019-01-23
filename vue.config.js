
console.log(`${process.env.NODE_ENV}`);
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.mjs', '.js', '.jsx', '.vue', '.json', '.wasm', 'ts'],
            alias: {
                'assets': '@/assets',
                'components': '@/components',
                'views': '@/views',
            }
        }
    },
}

