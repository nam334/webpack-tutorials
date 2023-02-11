const path = require("path")
const common = require("./webpack.common")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common,{
    mode:"production",
    // devtool:"none",
    // entry: "./src/index.js",
    output:{
        filename:"[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
          // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
          // `...`,
          new CssMinimizerPlugin(),
          new TerserPlugin(),
          new HtmlWebpackPlugin({
            template: "./src/template.html",
            minify:{
                removeAttributeQuotes: true,
                collapseWhitespace:true,
                removeComments: true
            }
          }),
        ],
      },
    plugins: [
      new MiniCssExtractPlugin({filename:"[name].[contentHash].css"}), 
      new CleanWebpackPlugin()
    ],
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [
                MiniCssExtractPlugin.loader, // extract css into files
                "css-loader",  // converts css to common js (plain javascript)
                "sass-loader"], // converts sass to css
              },
        ]
    }
})