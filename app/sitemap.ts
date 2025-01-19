import type { MetadataRoute } from 'next'
import postBingIndexNow from '@/postBingIndexNow'

import projects from '@/projets.yaml'
import { encodeProjectName } from '@/components/ProjectDescription'
import { blogArticles } from '@/components/blog/blogArticles'
import { getLastEdit } from '@/components/blog/utils'

export const domain = 'https://kont.me'
const basePaths = ['', '/contact']

const projectPaths = projects.map(
	(project) => '/?projet=' + encodeProjectName(project.nom, true)
)
const articlePaths = await Promise.all(
	blogArticles.map(async (post) => {
		const lastEdit = await getLastEdit(post.url.slice(1))

		return {
			url: escapeXml(domain + post.url),
			lastModified: new Date(lastEdit),
		}
	})
)

const paths = [...basePaths, ...projectPaths, ...articlePaths]

export default async function sitemap(): MetadataRoute.Sitemap {
	await postBingIndexNow(paths)

	return [
		...paths.map((path) =>
			typeof path === 'object'
				? path
				: {
						url: domain + path,
				  }
		),
	]
}

export function escapeXml(unsafe) {
	return unsafe.replace(/[<>&'"]/g, function (c) {
		switch (c) {
			case '<':
				return '&lt;'
			case '>':
				return '&gt;'
			case '&':
				return '&amp;'
			case "'":
				return '&apos;'
			case '"':
				return '&quot;'
		}
	})
}
