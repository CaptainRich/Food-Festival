const path    = require( "path" );          // we can use Node.js and NPM modules
const webpack = require( "webpack" );       // needed to use webpack's methods and properties
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {                          // the main configuration object
    entry: {
        app: './assets/js/script.js',         // define the root of the bundle
        events: "./assets/js/events.js",      // define the entry points for the other modules
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js"
    },

    output: {                               // specify where the output bundle goes
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
    },

    module: {
        rules: [
          {
            test: /\.jpg$/i,                  // process any 'jpg' file  (file-loader)
            use: [
                {
                  loader: 'file-loader',
                  options: {
                    name (file) {
                      return "[path][name].[ext]"            // return the full pathname of the file
                    },
                    publicPath: function(url) {
                      return url.replace("../", "/assets/")  // replace the ../ from require() with /assets/
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
      new webpack.ProvidePlugin({  // define the plugin for JQuery
        $: "jquery",
        jQuery: "jquery"
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: "static",    // the report outputs to an HTML file in the dist folder
      })
    ],
    mode: 'development'                      // switch to production when we're finished.

};