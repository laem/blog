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
			{articles.map((a) => (
				<aside
					css={`
						p {
							max-width: 36rem;
							margin-bottom: 0.3rem;
						}
						> a {
							text-decoration: none;
						}

						h3 {
							display: inline-block;
							margin-right: 1rem;
						}
						margin-bottom: 3rem;
					`}
				>
					<header>
						<a href={'/' + a.id}>
							<h3>{a.attributes.titre}</h3>
						</a>
						<small>{a.attributes.date}</small>
					</header>
					<a href={'/' + a.id}>
						<img css="width: 10rem" src={a.attributes.image}></img>
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
