var path = require('path');
var glob = require('globby');
var webpack = require('webpack');

//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var JS_PATH = path.resolve(ROOT_PATH, 'app/js');

function getEntry() {
  var dirs = glob.sync(['./app/js/**/*.js',
    '!./app/js/**/_*.js',
    '!./app/js/lib/**/*.js',
    '!./app/js/mods/**/*.js'
  ])
  var files = {};
  dirs.forEach(function (item) {
    var matchs = path.relative(JS_PATH, item).replace(".js", "")
    if (matchs) {
      files[matchs] = item
    }
  });
  return files;
}

module.exports = {
  context: __dirname,
  entry: getEntry(),
  output: {
    path: path.join(__dirname, 'static/build/webpack'),
    filename: '[name].js'
  },
  devtool: "#inline-source-map",
  jshint: {
    "esnext": true
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    }),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery"
    })
  ],
  devServer: {
    hot: true,
    inline: true,
    //其实很简单的，只要配置这个参数就可以了
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  module: {
    perLoaders: [{
      test: /\.jsx?$/,
      include: JS_PATH,
      loader: 'jshint-loader'
    }],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      include: JS_PATH
    }, {
      test: /\.hbs/,
      loader: 'handlebars-loader'
    }]
  },
  resolve: {
    root: JS_PATH,
    extensions: ['', '.js', '.jsx'],
    alias: {
      "g-loading$": 'mods/modal/loading.js'
    }
  },
  externals: {
    'jquery': '$',
    'react': 'React'
  }
};
