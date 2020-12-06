const webpack = require("webpack");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
// const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
// const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");


const config = {
  entry: {
    app: './assets/js/script.js',            // define the root of the bundle
    events: './assets/js/events.js',         // define the entry points for the other modules
    schedule: './assets/js/schedule.js',
    tickets: './assets/js/tickets.js'
  },
  output: {                                  // specify where the output bundle goes
    filename: '[name].bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,         // process any "image" files
        use: [
          {
            loader: 'file-loader',
            options: {
              name(file) {
                return '[path][name].[ext]'; // return the full pathname of the file
              },
              publicPath: function(url) {
                return url.replace('../', '/assets/');  // replace the ../ from require() with /assets/
              }
            }
          },
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({               // define the plug-in for JQuery
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static'                  // the report outputs to an HTML file in the dist folder
    })
    // new WebpackPwaManifest({
    //   name: "Food Event",
    //   short_name: "Foodies",
    //   description: "An app that allows you to view upcoming food events.",
    //   background_color: "#01579b",
    //   theme_color: "#ffffff",
    //   fingerprints: false,
    //   inject: false,
    //   icons: [{
    //     src: path.resolve("assets/img/icons/icon-512x512.png"),
    //     sizes: [96, 128, 192, 256, 384, 512],
    //     destination: path.join("assets", "icons")
    //   }]
    // })
  ],
  mode: 'development'                         // switch to production when we're finished
};

module.exports = config;
