const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({     
      filename: "app.css",          
    }),
    new HtmlWebpackPlugin({
      title: 'Home',  
      filename: 'index.html',
      template: 'assets/template/home.html',
      minify:true          
    }), 
    new HtmlWebpackPlugin({
      title: 'About',  
      filename: 'about.html',
      template: 'assets/template/about.html'      
    }),   
    new webpack.HotModuleReplacementPlugin({      
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'      
    }),
    new CopyWebpackPlugin([
      { from: 'assets/resources/img/about/*.mp4', to: 'dist/' }      
    ]),
    
  ],
  entry :'./app.js',  
  devtool: 'inline-source-map',  
  devServer: {
         contentBase:  path.join(__dirname, 'dist'),
         compress:true,
         port: 9898,
         hot: true,
         inline: true,
         openPage: 'about.html'  
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
          loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
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
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',          
          options: {          
              root: path.resolve(__dirname, './assets/resources/img'),
              attrs: ['img:src','link:href','image:xlink:href']              
          }
        }
      }      
  ]
  }  
}


