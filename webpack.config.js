const path = require('path');

module.exports = {
  entry: path.resolve(
    __dirname,
    './animoconsultoria/animoSite/static/src',
    'index.js',
  ),
  output: {
    path: path.resolve(__dirname, './animoconsultoria/animoSite/static/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
