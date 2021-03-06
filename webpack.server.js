const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
//const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //inform webpack we are building a bundle for node js rather than the browser
  target: 'node',
  //Tell webpack the root file of our server application
  entry: './src/index.js',

  //Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  }
  //imports only the packages from node you require so smaller bundles.
  //externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
