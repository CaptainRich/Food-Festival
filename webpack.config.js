const path    = require( "path" );          // we can use Node.js and NPM modules
const webpack = require( "webpack" );       // needed to use webpack's methods and properties

module.exports = {                          // the main configuration object
    entry: './assets/js/script.js',         // define the root of the bundle

    output: {                               // specify where the output bundle goes
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.bundle.js'
    },

    plugins: [  new webpack.ProvidePlugin({  // define the plugin for JQuery
        $: "jquery",
        jQuery: "jquery"
      }),
    ],
    mode: 'development'                      // switch to production when we're finished.

};