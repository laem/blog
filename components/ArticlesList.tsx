import Image from 'next/image'
import { blogArticles } from '@/components/blog/blogArticles'
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
	a {
		img {
			width: 10rem;
			height: auto;
			box-shadow: var(--shadow-elevation-medium);
		}
	}
`

export default function ArticlesList() {
	return (
		<Wrapper>
			<header></header>
			{blogArticles
				.sort((a1, a2) => (a1.date > a2.date ? -1 : 1))
				.map((a) => (
					<Aside key={a.url}>
						<header>
							<Link href={a.url}>
								<h2>{a.titre.raw}</h2>
							</Link>
							<small>{dateCool(a.date)}</small>
						</header>
						<Link href={a.url}>
							<Image
								src={'/' + a.image.adresse}
								width="200"
								height="300"
								alt={a.image.description}
							></Image>
						</Link>
						<p>
							{a.résumé}{' '}
							<Link href={a.url}>
								<em>Lire</em>
							</Link>
						</p>
					</Aside>
				))}
		</Wrapper>
	)
}
