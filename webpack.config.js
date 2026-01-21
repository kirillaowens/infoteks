const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv").config();

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", { targets: "defaults" }],
                ["@babel/preset-react", { runtime: "automatic" }],
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.svg$/i,
        oneOf: [
          {
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
          },
          {
            type: "asset/resource",
          },
        ],
      },
    ],
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components/"),
      "@pages": path.resolve(__dirname, "src/pages/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    fallback: {
      process: false,
      util: false,
      stream: false,
      buffer: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./public/icon.svg",
      templateContent: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content="React Hooks App" />
            <title>Voenmeh File App</title>
          </head>
          <body>
            <div id="root"></div>
          </body>
        </html>
      `,
    }),
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development"),
      "process.env.API_KEY": JSON.stringify(process.env.API_KEY || ""),
      global: "window",
      process: JSON.stringify({ env: { NODE_ENV: "development" } }),
    }),
    new webpack.DefinePlugin({
      "process.env.REACT_APP_API_KEY": JSON.stringify(
        process.env.REACT_APP_API_KEY,
      ),
    }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  mode: "development",
  target: "web",
};
