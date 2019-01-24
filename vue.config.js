
console.log(`${process.env.NODE_ENV}`);
module.exports = {
    configureWebpack: {
        resolve: {
            extensions: ['.mjs', '.js', '.jsx', 'css',
              '.vue', '.json', '.wasm', 'ts'],
        },
    },
}

