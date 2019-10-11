const HtmlWebPackPlugin = require("html-webpack-plugin");
let FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",   // entry point
  devtool: "source-map",
  resolve: {
    // Ajoute '.ts' et'.tsx' aux extensions traitées
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      { 
        test: /\.css$/,
        use: ["style-loader", "css-loader"] 
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
        {
            loader: 'file-loader',
            options: {
                name: '[name].[ext]',
                outputPath: './assets/',
            }
        }]
      },
      { 
        test: /\.tsx?$/, 
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new FaviconsWebpackPlugin("./public/favicon.png"),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ]
};