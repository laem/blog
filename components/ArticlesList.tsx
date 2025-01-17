import { blogArticles } from '@/app/blog/blogArticles'
import {
	accessibleImage,
	imageResizer,
	dateCool,
} from '@/components/blog/utils'
import { css, styled } from 'next-yak'
import Link from 'next/link'

const Wrapper = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	aside {
		text-align: center;
	}
	max-width: 400px;
	margin: 0 auto;
`

const Aside = styled.aside`
	p {
		max-width: 36rem;
		margin-bottom: 0.3rem;
	}
	header {
		margin-bottom: 1rem;
	}
	header > a {
		text-decoration: none;
	}

	h2 {
		display: block;
		text-decoration: none;
		margin-bottom: 0.3rem;
	}
	margin-bottom: 3rem;
`

export default function ArticlesList() {
	return (
		<Wrapper>
			<header></header>
			{blogArticles
				.sort((a1, a2) => (a1.date > a2.date ? -1 : 1))
				.map(
					(a) =>
						console.log('aaa', a) || (
							<Aside key={a.slug}>
								<header>
									<Link href={'/' + a.slug}>
										<h2>{a.titre.raw}</h2>
									</Link>
									<small>{dateCool(a.date)}</small>
								</header>
								<Link href={'/' + a.slug}>
									<img
										css={css`
											width: 10rem;
											box-shadow: var(--shadow-elevation-medium);
										`}
										src={imageResizer('m')(accessibleImage(a.image).image)}
									></img>
								</Link>
								<p>
									{a.résumé}{' '}
									<Link href={'/' + a.slug}>
										<em>Lire</em>
									</Link>
								</p>
							</Aside>
						)
				)}
		</Wrapper>
	)
}
