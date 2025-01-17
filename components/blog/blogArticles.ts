import articles from '@/.contentlayer/generated/Article/_index.json'

export const allArticles = articles
export const blogArticles = articles.filter(
	(article) =>
		!article.tags?.includes('page') && !article.tags?.includes('brouillon')
)
