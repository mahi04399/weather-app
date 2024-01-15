const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },{
        test: /\.css$/,
        use: ['style-loader', //2. Injects css into DOM
         'css-loader' //1. Turns css into commonjs
        ],
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/template.html',
    }),
  ],
  devServer: {
    static: './dist',
    port: 3000,
  },
};
