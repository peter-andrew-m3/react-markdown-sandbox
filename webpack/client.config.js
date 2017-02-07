module.exports = {
  entry: {
    client: './src/client/index.js',
  },
  output: {
    path: './public-dist/',
    filename: '[name].bundle.js',
    publicPath: '/public-dist/',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: [
            'react',
            'es2015',
          ],
          plugins: [
            'transform-object-rest-spread',
            'transform-class-properties',
            'transform-es3-member-expression-literals',
            'transform-es3-property-literals',
          ]
        },
      },
    ],
  },
};
