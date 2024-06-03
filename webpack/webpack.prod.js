const webpack = require('webpack')
// const BundleAnalayzerPlugin =
//   require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('ProdEnviroment'),
    }),
    // new BundleAnalayzerPlugin(),
  ],
}
