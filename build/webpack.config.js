const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production"; // 是否生产环境

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/main.js",
  },

  output: {
    path: resolve("dist"),
    filename: "[name].[contenthash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: vueLoaderConfig,
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [
          resolve("src"),
          resolve("test"),
          resolve("node_modules/webpack-dev-server/client"),
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  devtool: isProd ? "cheap-module-source-map" : "cheap-module-eval-source-map",

  devServer: {
    host: "8.131.98.76", // 主机名
    stats: "errors-only", // 打包日志输出输出错误信息
    port: 8080,
    open: true,
  },
};
