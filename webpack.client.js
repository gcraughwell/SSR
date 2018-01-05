const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
//const webpackNodeExternals = require('webpack-node-externals');

const config = {
  entry: './src/client/client.js',

  //Tell webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
  //imports only the packages from node you require so smaller bundles.
  //externals: [webpackNodeExternals()]
};
module.exports = merge(baseConfig, config);
