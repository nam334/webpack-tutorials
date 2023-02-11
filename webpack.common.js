const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins:[new HtmlWebpackPlugin({
      template: "./src/template.html"
    })],
        module: {
          rules: [
            {
              test: /\.scss$/,
              use: [
              "style-loader", // injects styles into dom
              "css-loader",  // converts css to common js (plain javascript)
              "sass-loader"], // converts sass to css
            },
          ],
        },
    
}