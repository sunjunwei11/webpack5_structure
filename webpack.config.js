const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	mode: 'development',
	// 错误信息精确到源代码的行
	devtool: 'cheap-module-source-map',
	entry: {
		index: './src/index.js',
		// home: './src/home.js'
	},
	output: {
		filename: 'static/js/[name][chunkhash:6].js',
		chunkFilename: 'static/js/[name][chunkhash:10].chunk.js', // 打包输出的其它chunk的name，比如动态import生成的chunk的name
		assetModuleFilename: 'static/media/[name][chunkhash:10][ext][query]', // 图片、字体等通过type:asset处理的资源命名
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'public'),
		},
		compress: true,
		port: 9000,
		hot: true // 开启HMR
	},
	module: {
		rules: [
			{
				// 文件命中了其中一个处理规则就不会再查找后面的的规则，提升处理性能
				oneOf: [
					{
						test: /\.m?js$/,
						exclude: /(node_modules|bower_components)/,
						use: {
							loader: 'babel-loader',
							options: {
								cacheDirectory: true, // 开启缓存
								cacheCompression: false // 缓存的文件不需要做压缩处理
							}
						}
					},
					{
						test: /\.s[ac]ss$/i,
						use: [
							MiniCssExtractPlugin.loader,
							// // Creates `style` nodes from JS strings
							// 'style-loader',
							// Translates CSS into CommonJS
							'css-loader',
							// Compiles Sass to CSS
							'postcss-loader',
							'sass-loader',
						],
					},
					{
						test: /\.(png|svg|jpg|jpeg|gif)$/i,
						type: 'asset/resource',
					},
					{
						test: /\.(woff|woff2|eot|ttf|otf)$/i,
						type: 'asset/resource',
					},
				]
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'static/css/[name][contenthash:6].css'
		}),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'template/index.html'),
		}), 
		new ESLintPlugin({
			context: path.resolve(__dirname, 'src'),
			exclude: 'node_modules',
			cache: true, // 开启缓存
			cacheLocation: path.resolve(__dirname, 'node_modules/.cache/eslint_cache') // 缓存位置
		})
	],
	optimization: {
		// splitChunks: {
		// 	// include all types of chunks
		// 	chunks: 'all',
		// 	// minSize: 0
		// },
		runtimeChunk: {
			name: (entrypoint) => `runtime~${entrypoint.name}`, // 改动utils代码不会影响到打包后的index.js文件
		},
	},
};
