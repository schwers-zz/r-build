module.exports = {
  name: 'ProductionClient',
  webpack: {
    devtool: 'source-map',
    entry: './src/Client.es6.js',
    output: {
      generator: 'simple',
      dest: './bin',
    },
    resolve: {
      generator: 'npm-and-modules',
      extensions: ['', '.js', '.jsx', '.es6.js', '.json']
    },
    loaders: [
      'esnextreact',
      'json',
      'css',
      'less',
    ],
    plugins: [
      'extract-css',
      'set-node-env',
      'production-loaders',
      'minify-and-treeshake',
      'abort-if-errors',
    ],
  },
};
