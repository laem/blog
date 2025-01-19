import { blogArticles } from '@/components/blog/blogArticles'
import { getLastEdit } from '@/components/blog/utils'
import Article from '@/components/blog/Article'
import SubHeader from '@/components/SubHeader'
import Header from '@/components/Header'
import SmallHeader from '@/components/SmallHeader'

export const generateMetadata = async (props) => {
	const params = await props.params
	const slug = decodeURIComponent(params.slug)
	const post = blogArticles.find((post) => post.url === '/' + slug)
	if (!post) return null
	const lastEdit = await getLastEdit(params.slug)
	return {
		title: post.titre.raw,
		description: post.résumé,
		openGraph: {
			images: post.image && [post.image],
			type: 'article',
			publishedTime: post.date + 'T00:00:00.000Z',
			modifiedTime: lastEdit + 'T00:00:00.000Z',
			url: params.slug,
		},
		alternates: {
			canonical: params.slug,
		},
	}
}

export default async function Post(props: Props) {
	const params = await props.params
	const slug = decodeURIComponent(params.slug)
	const post = blogArticles.find((post) => post.url === '/' + slug)

	console.log('POSTOU', post, params.slug)
	if (!post) return null

	return (
		<main>
			<SmallHeader />
			<Article post={post} slug={params.slug} />
		</main>
	)
}
