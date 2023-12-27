import HtmlWebpackPlugin from 'html-webpack-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
const isDevelopment = process.env.NODE_ENV !== 'production'
import RemarkHTML from 'remark-html'
import path from 'path'
import CopyPlugin from 'copy-webpack-plugin'

const __dirname = new URL('.', import.meta.url).pathname
const outputPath = __dirname + 'dist'
console.log({ outputPath })

const config = {
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
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				resolve: {
					fullySpecified: false, // disable the behaviour
				},
				use: [
					{
						loader: 'babel-loader',
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
								isDevelopment && 'react-refresh/babel',
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
		path: outputPath,
	},
	devServer: {
		historyApiFallback: true,
		hot: true,
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

export default config
