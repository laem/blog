import createMDX from '@next/mdx'
import { withContentlayer } from 'next-contentlayer2'
import { withYak } from 'next-yak/withYak'
import path from 'path'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)

import mdxOptions from './mdxOptions.mjs'

const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},
	/*
	compilerOptions: {
		baseUrl: '.',
	},
	*/
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
	async rewrites() {
		return [{ source: '/feed.xml', destination: '/_next/static/feed.xml' }]
	},
	webpack: (config, options) => {
		config.module.rules.push({
			test: /\.ya?ml$/,
			use: 'yaml-loader',
		})
		config.module.rules.push({ test: /\.mp3$/, type: 'asset/resource' })
		config.module.rules.push({
			test: /\.csv$/,
			loader: 'csv-loader',
			options: {
				dynamicTyping: true,
				header: true,
				skipEmptyLines: true,
			},
		})

		config.resolve.alias = {
			...config.resolve.alias,
			//https://github.com/Turfjs/turf/issues/2200
			rbush: path.resolve(__dirname, '/node_modules/rbush/rbush.js'),
		}

		return config
	},
	pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}

const withMDX = createMDX({ options: mdxOptions })

export default withYak(withContentlayer(withMDX(nextConfig)))
