import React from 'react'
import Article from './Article'
import { imageResizer, accessibleImage } from './Article'
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import projets from './projets.yaml'
import styled from 'styled-components'

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

			a {text-decoration: none}
  --shadow-color: 0deg 0% 63%;
  --shadow-elevation-low:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    0.4px 0.8px 1px -1.2px hsl(var(--shadow-color) / 0.34),
    1px 2px 2.5px -2.5px hsl(var(--shadow-color) / 0.34);
  --shadow-elevation-medium:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.36),
    0.8px 1.6px 2px -0.8px hsl(var(--shadow-color) / 0.36),
    2.1px 4.1px 5.2px -1.7px hsl(var(--shadow-color) / 0.36),
    5px 10px 12.6px -2.5px hsl(var(--shadow-color) / 0.36);
  --shadow-elevation-high:
    0.3px 0.5px 0.7px hsl(var(--shadow-color) / 0.34),
    1.5px 2.9px 3.7px -0.4px hsl(var(--shadow-color) / 0.34),
    2.7px 5.4px 6.8px -0.7px hsl(var(--shadow-color) / 0.34),
    4.5px 8.9px 11.2px -1.1px hsl(var(--shadow-color) / 0.34),
    7.1px 14.3px 18px -1.4px hsl(var(--shadow-color) / 0.34),
    11.2px 22.3px 28.1px -1.8px hsl(var(--shadow-color) / 0.34),
    17px 33.9px 42.7px -2.1px hsl(var(--shadow-color) / 0.34),
    25px 50px 62.9px -2.5px hsl(var(--shadow-color) / 0.34);

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
		`}
	>
		<img
			css="width: 3rem; margin: 0 1rem"
			src="https://avatars1.githubusercontent.com/u/1177762?s=460&v=4"
		/>
		<h1>Maël</h1>
	</header>
)

const BlogHeader = () => (
	<div
		css={`
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
			justify-content: center;
			> h1,
			> h2 {
				margin: 0.8rem;
				font-size: 100%;
				font-weight: normal;
				max-width: 20rem;
			}
			> p {
				margin-top: 0;
			}
			> img {
				width: 2.6rem;
				transform: scale(-1, 1);
			}
		`}
	></div>
)

const SubHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		font-size: 120%;
		font-weight: normal;
		max-width: 20rem;
		/*
					border-bottom: 2px solid #fe9d00;
					padding: 0.2rem 0.4rem;
					color: #38255c;
					*/
	}

	h2 em {
		background: rgb(78, 47, 90);
		font-style: normal;
		color: white;
		padding: 0rem 0.6rem 0.1rem;
	}
	> img {
		width: 2rem;
		margin: 0 0.4rem;
		transform: scale(-1, 1) translateY(0.5rem);
	}
`

const Projects = () => (
	<div>
		<SubHeader>
			<img src="https://openmoji.org/data/color/svg/2935.svg" />
			<h2>
				<em>Mes projets</em>
			</h2>
		</SubHeader>
		<ul
			css={`
				display: flex;
				flex-wrap: wrap;
				list-style-type: none;
				justify-content: center;
				align-items: center;
				padding-left: 0;
				margin: 0 0 2rem;
				flex-wrap: nowrap;
				overflow-x: auto;
				justify-content: normal;
				height: 11rem;
				scrollbar-width: none;
				li {
					padding: 0.1rem 0rem;
					margin: 0.4rem;
					border-radius: 0.2rem;
					line-height: 1.6rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					box-shadow: 0.5px 1px 1px hsl(var(--shadow-color) / 0.7);
					--shadow-color: 0deg 0% 50%;
					width: 10rem;
					height: 8rem;
					text-align: center;
				}
				li img {
					height: 4rem;
					max-width: 100%;
					filter: grayscale(1);
					transition: filter 0.3s ease-in;
				}
				li img:hover,
				li img:active {
					filter: none;
				}
				li h3 {
					font-size: 100%;
					margin: 0.4rem;
				}
			`}
		>
			{projets.map(({ lien, nom, image, github }) => (
				<a href={lien}>
					<li css={``} key={lien}>
						<img src={image} />
						<h3>{nom}</h3>
					</li>
				</a>
			))}
		</ul>
	</div>
)

let Liste = ({ articles }) => (
	<main css={pageLayout}>
		<Header />

		<Projects />
		<SubHeader>
			<img src="https://openmoji.org/data/color/svg/2935.svg" />
			<h2>
				<em>Quelques textes</em> sur notre environnement, nos villes et les
				algorithmes
			</h2>
		</SubHeader>
		<section
			css={`
				display: flex;
				flex-direction: column;
				align-items: center;
				aside {
					text-align: center;
				}
				max-width: 400px;
				margin: 0 auto;
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
								css="width: 10rem; box-shadow: var(--shadow-elevation-medium)"
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
