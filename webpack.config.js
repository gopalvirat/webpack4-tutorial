const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({     
      filename: "min.css",      
    }),
    new HtmlWebpackPlugin({
      title: 'Title wo',  
      template: 'resources/html/home.html'          
    }),
    new webpack.HotModuleReplacementPlugin({      
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
         inline: true,
         stats: {
           children:false
         }
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
    }
    ,
    {
               test: /\.(woff|woff2|eot|ttf|otf)$/,
               use: [
                 'file-loader'
               ]
             }
  ]
  }
};

//module.exports = config;