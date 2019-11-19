const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const root = path.resolve(__dirname, './');

module.exports = {
  entry: `${root}/src/index.js`,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${root}/src/index.html`,
      templateParameters: {
        title: 'React Demo'
      }
    })
  ],
  devServer: {
    contentBase: `${root}/public`,
    compress: true,
    port: 3001
  },
  output: {
    path: `${root}/public`,
    filename: 'bundle.js'
  }
};
