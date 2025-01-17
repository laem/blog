// contentlayer.config.ts
import { defineDocumentType, makeSource } from 'contentlayer2/source-files'
import mdxOptions from './mdxOptions.mjs'

export const Article = defineDocumentType(() => ({
	name: 'Article',
	filePathPattern: `**/*.mdx`,
	contentType: 'mdx',

	fields: {
		titre: { type: 'markdown', required: true },
		modified: { type: 'date', required: false },
		created: { type: 'date', required: false },
		date: { type: 'date', required: true },
		résumé: { type: 'string', required: true },
		//image: { type: 'nested', required: false },
		tags: { type: 'list', of: { type: 'string' }, required: false },
		bluesky: { type: 'string', required: false },
		lang: { type: 'string', required: false },
		dégradé: { type: 'list', of: { type: 'string' }, required: false },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/blog/${post._raw.flattenedPath}`,
		},
	},
}))

export default makeSource({
	contentDirPath: 'articles',
	documentTypes: [Article],
	mdx: mdxOptions,
})
