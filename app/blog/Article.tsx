import Contribution from '@/app/blog/Contribution'
import ArticleWrapper, { BackToBlogLink } from '@/components/ArticleUI'
import BlueskyComments from '@/components/BlueskyComments'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import OtherArticles from './OtherArticles'
import { mdxComponents } from './mdxComponents'
import { dateCool, getLastEdit } from './utils'

export default async function Article({ post, slug }) {
	const MDXContent = getMDXComponent(post.body.code)
	const lastEdit = await getLastEdit(slug)

	const sameEditDate =
		!lastEdit || post.date.slice(0, 10) === lastEdit.slice(0, 10)
	return (
		<div>
			<ArticleWrapper>
				{!post.tags?.includes('page') && (
					<BackToBlogLink href="/blog">← Retour au blog</BackToBlogLink>
				)}
				<header>
					{post.image && (
						<Image
							src={post.image}
							width="600"
							height="400"
							alt="Illustration de l'article"
						/>
					)}
					<h1 dangerouslySetInnerHTML={{ __html: post.titre.html }} />
					<p>{post?.description}</p>
					<small>
						publié le <time dateTime={post.date}>{dateCool(post.date)}</time>
						{!sameEditDate && (
							<span>
								, mis à jour{' '}
								<time dateTime={lastEdit}>{dateCool(lastEdit)}</time>
							</span>
						)}
					</small>
					<hr />
				</header>
				<MDXContent components={mdxComponents} />
				<Contribution slug={slug} />
				<OtherArticles excludeUrl={post.url} />
			</ArticleWrapper>
			{post?.bluesky && <BlueskyComments uri={post.bluesky} />}
		</div>
	)
}
