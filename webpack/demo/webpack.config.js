const htmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');

module.exports = {
	entry: './src/js/hello.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundles2.js'
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}]
		}, {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
		}]
	},
	plugins: [
		new webpack.optimize.UglifyJsPlugin(),
		new htmlWebpackPlugin({
			template: 'index.html',
			title: 'html-webpack-plugin title'
		})
	]
}


// entry
/**
 * entry
 * 	简写语法：
 * 		entry : "path/..."
 * 			---扩展差
 * 	对象写法
 * 		entry:{
 * 			app:'path/app.js',
 * 			main:'path/main.js'
 * 		}
 * 			---良好的扩展性
 */

// output
/**
 * output
 * 	webpack配置output最少需要配置 path 、 filename
 * 		output:{
 * 			path:__dirname,
 * 			filename:'name.js'
 * 		}
 * 			--- path是一个绝对路径 __dirname 是根目录
 * 			--- filename 是输出的文件名
 */

// loader
/**
 * loader
 * 	 --使用时需下载相对应的loader
 * 	 	--三种使用方式
 * 	 			--- require时添加 require('style-loader!css-loader!./demo.css');
 * 	 			--- CLI时添加 webpack --module-bind css='style-loader!css-loader'
 * 	 			--- webpack.config.js 配置中使用
 * 	 				---- module: {
							rules: [{
								test: /\.css$/,
								loader: 'style-loader!css-loader'
							}]
						}
					---- module: {
							rules: [{
								test: /\.css$/,
								use: 'style-loader'
							}, {
								test: /\.css$/,
								use: 'css-loader'
							}]
						}
					---- module: {
							rules: [{
								test: /\.css$/,
								use: {
									loader: 'style-loader',
									options: {}
								}
							}, {
								test: /\.css$/,
								use: {
									loader: 'css-loader',
									options: {}
								}
							}]
						}
					---- module: {
							rules: [{
								test: /\.css$/,
								use: [{
									loader: 'style-loader'
								}, {
									loader: 'css-loader'
								}]
							}]
						}
 */

// plugins
/**
 * plugins
 * 	-插件目的用于解决loader无法实现的事情、问题
 * 		-- new webpack.optimize.UglifyJsPlugin() 压缩js代码
 * 		-- new HtmlWebpackPlugin({
				template: 'index.html'
			}) 生成html代码，文件内容与 template 指向的文件一样 ， 仅仅是多了导出的js引用
 */

// 热加载
/**
 *  --- 安装 npm install webpack-dev-server --save-dev
 *  --- CLI 命令行 webpack-dev-server --open
 */