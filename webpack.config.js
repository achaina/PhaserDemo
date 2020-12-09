// still figuring out if its possible to use typescript for the configuration
// import * as path from "path";
// import * as webpack from "webpack";

// const config: webpack.Configuration = {
//   entry: "./src/index.ts",
//   module: {
//     rules: [
//       {
//         test: /\.ts$/,
//         use: "ts-loader",
//         include: [path.resolve(__dirname, "src")],
//       },
//     ],
//   },
//   output: {
//     filename: "index.js",
//     path: path.resolve(__dirname, "public"),
//   },
// };

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: './src/main.ts',
    vendors: ['phaser'],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },

  devtool: 'inline-source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },

  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  mode: 'development',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
    open: true,
  },

  plugins: [
    // new CopyPlugin({
    //   patterns: [
    //     {
    //       from: 'index.html',
    //     },
    //     {
    //       from: 'assets/**/*',
    //     },
    //   ],
    // }),
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
  ],

  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};