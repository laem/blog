const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const isDevelopment = process.env.NODE_ENV !== 'production'
const RemarkHTML = require('remark-html')
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
	mode: isDevelopment ? 'development' : 'production',
	resolve: {
		fallback: {
			path: 'path-browserify',
			buffer: 'buffer',
		},
	},
	module: {
		rules: [
			{
				test: /node_modules\/vfile\/core\.js/,
				use: [
					{
						loader: 'imports-loader',
						options: {
							type: 'commonjs',
							imports: ['single process/browser process'],
						},
					},
				],
			},
			{
				test: /\.md$/,
				use: [
					{
						loader: 'html-loader',
					},
					{
						loader: 'remark-loader',
						options: {
							remarkOptions: {
								plugins: [RemarkHTML],
							},
						},
					},
				],
			},

			{
				test: /\.ya?ml$/,
				use: 'yaml-loader',
				type: 'json',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: require.resolve('babel-loader'),
						options: {
							presets: [
								'@babel/preset-env',
								[
									'@babel/preset-react',
									{
										runtime: 'automatic',
									},
								],
							],
							plugins: [
								'babel-plugin-styled-components',
								isDevelopment && require.resolve('react-refresh/babel'),
							].filter(Boolean),
						},
					},
				],
			},
		],
	},

	entry: {
		javascript: './index.js',
	},

	output: {
		path: path.join(__dirname, '/dist'),
	},
	devServer: {
		historyApiFallback: true,
	},

	plugins: [
		isDevelopment && new ReactRefreshWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Un blog',

			template: 'index.html',
		}),
		new CopyPlugin({
			patterns: [
				{
					from: 'images',
					to: 'images',
				},
			],
		}),
	].filter(Boolean),
}
