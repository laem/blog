import type { MetadataRoute } from 'next'
import postBingIndexNow from '@/postBingIndexNow'

import projects from '@/projets.yaml'
import { encodeProjectName } from '@/components/ProjectDescription'
import { blogArticles } from '@/components/blog/blogArticles'

export const domain = 'https://kont.me'
const basePaths = ['', '/contact']

const projectPaths = projects.map(
	(project) => '/?projet=' + encodeProjectName(project.nom, true)
)
const articlePaths = blogArticles.map((post) => post.url)

const paths = [...basePaths, ...projectPaths, ...articlePaths]

export default async function sitemap(): MetadataRoute.Sitemap {
	await postBingIndexNow(paths)

	return [
		...paths.map((path) => ({
			url: domain + path,
		})),
	]
}
