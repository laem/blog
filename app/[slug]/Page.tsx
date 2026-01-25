import SmallHeader from '@/components/SmallHeader'
import Article from '@/components/blog/Article'
import { styled } from 'next-yak'

export default function Page({ slug, post }) {
	return (
		<Main
			$gradient={
				post.dégradé
					? `
									${post.dégradé[0]},
									${post.dégradé[1]}
						  `
					: 'red, blue'
			}
		>
			<SmallHeader />
			<Article post={post} slug={slug} />
		</Main>
	)
}
const Main = styled.main`
	background: linear-gradient(${(p) => p.$gradient});
`
