const path = require('path');

const config = {
    entry: path.resolve('./src/js/index.js'),
    output: {
        path: path.resolve('./js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.{js}$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'postcss-loader']
            }
        ]
    },
};

module.exports = config;
