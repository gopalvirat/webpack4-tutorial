const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({     
      filename: "min.css",          
    }),
    new HtmlWebpackPlugin({
      title: 'Home',  
      filename: 'hh.html',
      template: 'resources/html/home.html'          
    }),
    new HtmlWebpackPlugin({
      title: 'About',  
      filename: 'hh.html',
      chunks: ['page2'],
      template: 'resources/html/about.html'          
    }),
    new webpack.HotModuleReplacementPlugin({      
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'      
    })
  ],
  entry :'./src/index.js',
  // to enable source mapping, can be used for easy debugging
  devtool: 'inline-source-map',
  // to tell dev server where to look for files
  devServer: {
         contentBase:  path.join(__dirname, 'dist'),
         compress:true,
         port: 9898,
         hot: true,
         inline: true        
  },
  mode:'development',
	output:{		
    path:path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
	}, 
  module: {
    rules: [
      {
      test: /\.less$/,
      use: [
          {
          loader: MiniCssExtractPlugin.loader
          },
          {
          loader: 'css-loader'
          },
          {
          loader: 'less-loader'
          }
        ]
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        'file-loader'
      ]
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
  ]
  }
  // resolve: {
  //   modules: ['node_modules'],
  //   alias: {
  //     'TweenMax': 'gsap/src/minified/TweenMax.min.js',
  //     'cssplugin': 'gsap/CSSPlugin.js'
  //   }
  // }
};

