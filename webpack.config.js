const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "cheap-eval-source-map",
  entry: "./public/entry.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    alias: {
      atomize: path.join(__dirname, "src")
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
    {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
              
                ]
            },
            {
                  test: /\.(jpe?g|png|svg)$/i,
                  use: [
                   {loader:'file-loader'},
                   {loader:'image-webpack-loader'},
        ],
              


            },
    ],
  },
   
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: "public/",
     historyApiFallback: true,
  }
};
