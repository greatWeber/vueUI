var path = require('path');
var webpack = require('webpack');
const utils = require('./utils');
const pkg = require('../package.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const vueLoaderConfig = require('./vue-loader.conf');
const UglifyJSPlugin  = require('uglifyjs-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
let plugins = [ 
  // 注释头
  new webpack.BannerPlugin([
    pkg.name + ' v' + pkg.version + ' (' + pkg.homepage + ')',
    'Copyright ' + new Date().getFullYear() + ', ' + pkg.author,
    pkg.license + ' license'
  ].join('\n')),
  // 生成css
  new ExtractTextPlugin({
    filename: './vueUI.css',
    disable: false,
    allChunks: true,
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  // new webpack.optimize.UglifyJsPlugin({
  //   sourceMap: true,
  //   compress: {
  //     warnings: false,
  //     drop_console: true
  //   }
  // }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new VueLoaderPlugin()
];
// 运行 `npm run build --report` 查看打包大小分布状况
if(process.env.npm_config_report){
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  plugins.push(new BundleAnalyzerPlugin())
}
module.exports = {
  entry: path.resolve(__dirname, '../src/index.ts'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: './',
    filename: 'vueUI.js',
    library: {
      root: "vueUI",
      amd: "vueUI",
      commonjs: "vueUI"
    },
    libraryTarget: 'umd',
    umdNamedDefine: true,
    libraryExport: "default"
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader?minimize'
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'postcss-loader', 'less-loader'],
          fallback: 'style-loader',
        }),
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
    ]
  },
  mode:'production',
  resolve: {
    extensions: ['.js', '.vue', '.json','.ts'],
    alias: {
      '@': resolve('src'),
      '@ex': resolve('examples')
    }
  },
  // devtool: '#source-map',
  plugins,
  externals:{
    vue:'vue'
  },
  optimization:{
    minimizer:[
      new UglifyJSPlugin({
        uglifyOptions:{
          sourceMap: true,
          output: {
            comments: false,
          },
          compress: {
            warnings: false,
            drop_console: false
          }

        }
      })
    ]
  }
}
