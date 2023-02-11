const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = merge(common,{
    mode:"development",
    output:{
        filename:"[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins:[new HtmlWebpackPlugin({
        template: "./src/template.html"
      })],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                "style-loader", // injects styles into dom
                "css-loader",  // converts css to common js (plain javascript)
                "sass-loader"], // converts sass to css
              },
        ]
    }
});