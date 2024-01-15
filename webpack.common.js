const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', //2. Injects css into DOM
         'css-loader' //1. Turns css into commonjs
        ],
      },
      {
        test: /\.html$/,
        use : ["html-loader"]
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        type: 'asset/resource'
      }
    ],
  },
  devServer: {
    static: './dist',
    port: 3000
  },
};
