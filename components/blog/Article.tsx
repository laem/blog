import BlueskyComments from '@/components/BlueskyComments'
import ArticleWrapper from '@/components/blog/ArticleUI'
import Contribution from '@/components/blog/Contribution'
import { getMDXComponent } from 'next-contentlayer2/hooks'
import Image from 'next/image'
import OtherArticles from './OtherArticles'
import { dateCool, getLastEdit } from './utils'

export default async function Article({ post, slug }) {
	const MDXContent = getMDXComponent(post.body.code)
	const lastEdit = await getLastEdit(slug)

	const sameEditDate =
		!lastEdit || post.date.slice(0, 10) === lastEdit.slice(0, 10)
	return (
		<div>
			<ArticleWrapper>
				<header>
					{post.image && (
						<Image
							src={'/' + post.image.adresse}
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
				<MDXContent />
				<Contribution slug={slug} />
				<OtherArticles excludeUrl={post.url} />
			</ArticleWrapper>
			{post?.bluesky && <BlueskyComments uri={post.bluesky} />}
		</div>
	)
}
