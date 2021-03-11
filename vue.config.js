const path = require("path");
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 路径映射必须以/开头和结尾
        "/comps/": path.resolve(__dirname, "src/components"),
      },
    },
  },
  publicPath: "/",
  devServer: {
    //host: '8.131.98.76',
    // proxy: {
    //   "/app": {
    //     target: "8.131.98.76",
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/app/, ""),
    //   },
    // },
  },
  pluginOptions: {
    webpack: {
      dir: ["./webpack"],
    },
  },
};
