import SmallHeader from '@/components/SmallHeader'
import Article from '@/components/blog/Article'
import { styled } from 'next-yak'

export default function Page({ slug, post }) {
	return (
		<Main
			$dégradé={
				post.dégradé
					? `
								linear-gradient(
									${post.dégradé[0]},
									${post.dégradé[1]}
								);
						  `
					: 'unset'
			}
		>
			<SmallHeader />
			<Article post={post} slug={slug} />
		</Main>
	)
}
const Main = styled.main`
	background: ${(p) => p.$dégradé};
`
