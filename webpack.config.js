module.exports = {
  entry: './client/app/app.js',
  devtool: 'sourcemap',
  output: {
    filename: './client/bundle.js'
  },
  // resolve: {
  //   // tells webpack to query these directories for modules
  //   modulesDirectories: ["bower_components"]
  // },  
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/node_modules/, /bower_components/, /server/], loader: 'babel' },
       { test: /\.html$/, loader: 'raw' },
       // { test: /\.styl$/, loader: 'style!css!stylus' },
       { test: /\.css$/, loader: 'style!css' }
    ]
  }
};
