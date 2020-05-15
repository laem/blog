import React from 'react'
import Article from './Article'
import frontMatter from 'front-matter'
import { imageResizer } from './Article'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

export const pageLayout = `
			max-width: 800px;
			margin: 0 auto;
`

var req = require.context('./articles', true, /\.md$/)
const rawArticles = [...req.keys()]
	.filter((key) => !key.includes('brouillon'))
	.map((key) => [key.replace('./', '').replace('.md', ''), req(key).default])
console.log({ rawArticles })

export const parsedArticles = rawArticles.map(([id, string]) => ({
	...frontMatter(string),
	id,
}))

export default () => {
	const path = decodeURI(window.location.pathname)

	return (
		<Router>
			<ScrollToTop>
				<Switch>
					<Route path="/:id">
						<Article />
					</Route>
					<Route path="/">
						<Liste articles={parsedArticles} />
					</Route>
					<Route path="*">
						<NoMatch />
					</Route>
				</Switch>
			</ScrollToTop>
		</Router>
	)

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
							<Link to={'/' + a.id}>
								<h2>{a.attributes.titre}</h2>
							</Link>
							<small>
								{a.attributes.date.toLocaleString(undefined, {
									weekday: 'long',
									year: 'numeric',
									month: 'long',
									day: 'numeric',
								})}
							</small>
						</header>
						<Link to={'/' + a.id}>
							<img
								css="width: 10rem; box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;"
								src={imageResizer('m')(a.attributes.image)}
							></img>
						</Link>
						<p>
							{a.attributes.résumé}{' '}
							<Link to={'/' + a.id}>
								<em>Lire</em>
							</Link>
						</p>
					</aside>
				))}
		</section>
	</main>
)

function NoMatch() {
	let location = useLocation()

	return (
		<div>
			<h3>
				No match for <code>{location.pathname}</code>
			</h3>
		</div>
	)
}
