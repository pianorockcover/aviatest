const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const mode = "development";
const outDir = "dist-client";

const config = {
  mode,
  entry: {
    index: "./src/frontend/index.tsx",
  },
  output: {
    path: resolve(__dirname, outDir),
    filename: "main.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|png|svg|jpg)$/,
        use: {
          loader: "url-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./static/index.html",
      filename: "index.html",
      inject: "body",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "static/fonts", to: "fonts" },
        { from: "static/img", to: "img" },
      ],
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
};

module.exports = config;
