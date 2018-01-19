var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    main: './src/main',
    vendors: ['vue', 'vue-router', 'iview', 'highlightjs/highlight.pack.js', 'clipboard']
  },
  output: {
    path: path.join(__dirname, './dist')
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                sass: ExtractTextPlugin.extract({
                  use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                }),
                scss: ExtractTextPlugin.extract({
                  use: ['css-loader?minimize', 'autoprefixer-loader', 'sass-loader'],
                  fallback: 'vue-style-loader'
                })
              },
              postLoaders: {
                html: 'babel-loader'
              }
            }
          },
          {
            loader: 'iview-loader',
            options: {
              prefix: false
            }
          }
        ]
      },
      {
        test: /iview\/.*?js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader?minimize',
          fallback: 'style-loader'
        })
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
        loader: 'url-loader?limit=1024'
      },
      {
        test: /\.(html|tpl)$/,
        loader: 'html-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'hljs': 'highlightjs/highlight.pack.js',
      'vue': 'vue/dist/vue.runtime.js'
    }
  }
};