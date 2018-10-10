const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const OUPUT_DIRECTORY = 'dist';

module.exports = {
  // This is where application starts executing and webpack starts bundling
  entry: './src/client/index.js',
  // Target directory and filename for the bundle output
  output: {
    path: path.join(__dirname, OUPUT_DIRECTORY),
    filename: 'bundle.js'
  },
  // Module loaders are pre hooks that transform the code before rendering it to the browser,
  // making it backwards compatable with older browsers. eg: babel transpiler for es6/es7 syntax
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  // Configurations for webpack-dev-server
  devServer: {
    port: 8888, // webpack-dev-server port to listen on
    open: true, // automatically open homepage on startup
    proxy: {
      '/': 'http://localhost:3333' // Express server to send API requests to
    }
  },
  // clean-webpack-plugin removes build folder(s) before building
  // html-webpack-plugin simplifies creation of HTML files for your bundle
  plugins: [
    new CleanWebpackPlugin([OUPUT_DIRECTORY]),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.png'
    })
  ]
};
