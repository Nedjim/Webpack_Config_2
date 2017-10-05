const path = require('path');
const ExempleWebpackPlugin = require('./ExempleWebpackPlugin.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './app/index.js',
    output : {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']},
            {test:  /\.(jpe?g)$/, use: ['file-loader']}
        ]
    },
    plugins: [
        new ExempleWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        })
    ]
}