var path = require("path");
var config = {
  entry: "./app/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/app.min.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;