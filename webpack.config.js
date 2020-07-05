module.exports = {
    entry: __dirname + '/src/index.js',
    output: {
        path: __dirname + '/dist',
        publicPath: '/dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    node: {
        fs: "empty",
        dns: "empty",
        module: "empty",
        net: "empty",
        tls: "empty"
    }
};
