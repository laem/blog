import React from 'react'
import Article from './Article'
import { imageResizer, accessibleImage } from './Article'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'

export const dateCool = (date) =>
	new Date(date).toLocaleString(undefined, {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const pageLayout = `
		padding: 0.6rem 1rem;
			max-width: 800px;
			margin: 0 auto;
`

var frontMatterReq = require.context(
	'!json-loader!front-matter-loader!./articles',
	false,
	/\.md$/
)
const frontMatters = [...frontMatterReq.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	frontMatterReq(key),
])

var req = require.context('./articles', false, /\.md$/)
const mds = [...req.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	req(key),
])

//console.log(frontMatters, mds)

export const parsedArticles = mds.map(([id, data]) => ({
	...frontMatters.find(([fid]) => fid === id)[1],
	body: data,
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
}

const Header = () => (
	<header
		css={`
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
			justify-content: center;
			> h1 {
				margin: 0.8rem;
				font-size: 100%;
				font-weight: normal;
				max-width: 20rem;
			}
			> p {
				margin-top: 0;
			}
			img {
				width: 2.6rem;
			}
		`}
	>
		<img src="https://avatars1.githubusercontent.com/u/1177762?s=460&v=4" />
		<h1>
			Quelques idées sur notre environnement, nos villes et les algorithmes
		</h1>
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
							<small>{dateCool(a.attributes.date)}</small>
						</header>
						<Link to={'/' + a.id}>
							<img
								css="width: 10rem; box-shadow: rgb(147, 143, 143) 2px 2px 10px 0px;"
								src={imageResizer('m')(
									accessibleImage(a.attributes.image).image
								)}
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
