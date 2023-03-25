const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App Dev",
      template: path.resolve(__dirname, "..", "./src/index.html"),
    }),
  ],
};
