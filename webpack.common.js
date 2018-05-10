const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index:'./src/index.js',
    commons:['lodash','react','react-redux','react-css-modules']
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
          test: /(\.jsx|\.js)$/,
          use:[
            "babel-loader",
            "eslint-loader",
          ],
          include: path.join(__dirname, 'src'),
          exclude: /node_modules/
      }, 
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
            options:{
                sourceMap: true
            } 
          },
          {
            loader: 'css-loader',
            options:{
                modules: true,
                sourceMap: true,
                localIdentName:'[name]__[local]-[hash:base64:5]'
            } 
          },
          {
            loader: 'sass-loader',
            options:{
                modules: true,
                sourceMap: true,
                localIdentName:'[name]__[local]-[hash:base64:5]'
            } 
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    //自动加载入口js
    new HtmlWebpackPlugin({
        template: __dirname + "/src/index.tmpl.html",
        hash:true,
        inject: true
    }),
    //清除dist里面无用的文件
    new CleanWebpackPlugin(['dist']),
    //代码分离
    new webpack.optimize.SplitChunksPlugin({
        cacheGroups: {
          default: {
              minChunks: 2,
              priority: -20, //缓存组优先级
              reuseExistingChunk: true,// 可设置是否重用该chunk（查看源码没有发现默认值）
          },
          //打包重复出现的代码
          vendor: {
              chunks: 'initial',// 必须三选一： "initial" | "all" | "async"(默认就是异步)
              minChunks: 2,
              maxInitialRequests: 5,// 最大初始化请求书，默认1
              minSize: 0, 
              name: 'vendor'
          },
          //打包第三方类库
          commons: {
              name: "commons",
              chunks: "initial",
              minChunks: Infinity
          }
      }
    }),
  ]
};
