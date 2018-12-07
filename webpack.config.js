const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [
    new MiniCssExtractPlugin({     
      filename: "min.css",      
    })
  ],
  entry :'./src/index.js',
  mode:'development',
	output:{
		filename: 'bundle.js',
		path:path.resolve(__dirname,'dist')
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