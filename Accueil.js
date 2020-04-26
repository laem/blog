import React from 'react'
import Article from './Article'
import frontMatter from 'front-matter'

export const pageLayout = `
			max-width: 800px;
			margin: 0 auto;
`

var req = require.context('./articles', true, /\.md$/)
const rawArticles = [...req.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	req(key).default,
])
console.log({ rawArticles })

const parsedArticles = rawArticles.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))

export default () => {
	const path = decodeURI(window.location.pathname)

	if (path === '/') return <Liste articles={parsedArticles} />
	const theOne = parsedArticles.find(({ id }) => id === path.replace('/', ''))
	if (theOne) return <Article data={theOne} />

	return <div>Désolé, cette page n'existe pas</div>
}

const Header = () => (
	<header
		css={`
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-bottom: 1rem;
			> h1 {
				margin: 0.8rem;
			}
			> p {
				margin-top: 0;
			}
		`}
	>
		<h1>📝 Un blog</h1>
		<p>Quelques idées sur notre environnement, nos villes, les algorithmes</p>
	</header>
)

let Liste = ({ articles }) => (
	<main css={pageLayout}>
		<Header />
		<section
			css={`
				display: flex;
				flex-direction: column;
				align-items: center;
				aside {
					text-align: center;
				}
			`}
		>
			<header></header>
			{articles
				.sort((a1, a2) => (a1.attributes.date > a2.attributes.date ? -1 : 1))
				.map((a) => (
					<aside
						css={`
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
						`}
					>
						<header>
							<a href={'/' + a.id}>
								<h2>{a.attributes.titre}</h2>
							</a>
							<small>
								{a.attributes.date.toLocaleString(undefined, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</small>
						</header>
						<a href={'/' + a.id}>
							<img
								css="width: 10rem; box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;"
								src={a.attributes.image}
							></img>
						</a>
						<p>
							{a.attributes.résumé}{' '}
							<a href={'/' + a.id}>
								<em>Lire</em>
							</a>
						</p>
					</aside>
				))}
		</section>
	</main>
)
