const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: {
    client: "./index.js",
    admin_table: "./table.js",
    admin_login: "./admin.js",
  },
  output: {
    filename: "js/[name].js",
    path: path.resolve(__dirname, "public"),
  },
  devServer: {
    hot: true,
    static: {
      directory: "./public",
      watch: true,
    },
    open: {
      app: {
        name: "Google Chrome",
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
};
