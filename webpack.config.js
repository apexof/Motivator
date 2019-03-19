const path = require("path");
const webpack = require("webpack");
const CleanObsoleteChunks = require("webpack-clean-obsolete-chunks");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const NODE_ENV = process.env.NODE_ENV || "development";
const IS_DEV = NODE_ENV === "development";

const config = {
  context: path.resolve(__dirname, "src"),
  entry: { index: "./index.jsx" },
  output: {
    filename: "[name].[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },
  devtool: IS_DEV ? "inline-source-map" : false,
  mode: NODE_ENV,
  watch: IS_DEV,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: true }
          },
          {
            loader: "postcss-loader",
            options: { config: { ctx: { env: NODE_ENV } } }
          },
          "sass-loader"
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { modules: false }
          }
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8000,
            name: "[name].[ext]",
            outputPath: "img/"
          }
        }
      },
      { test: /\.(ico)$/i, loader: "file?name=[name].[ext]" }
    ]
  },
  plugins: [
    new CleanObsoleteChunks(),
    new CleanWebpackPlugin(["dist"], { exclude: ["static"] }),
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new MiniCssExtractPlugin({ filename: "css/[name].[chunkhash].css" }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      favicon: "./favicon.ico"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: "libs",
          chunks: "all",
          minChunks: 2
        }
      }
    }
  },
  resolve: { extensions: [".js", ".json", ".jsx", "*"] }
};

module.exports = config;
