const path = require("path");

module.exports = {
  entry: {
    main: "./src/main.js",
  },
  mode: "development",
  output: {
    filename: "[name]-bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  target: "web",
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      }
    ]
  }
};
