import React from 'react'
import {
	BrowserRouter as Router,
	Link,
	Route,
	Routes,
	RouterProvider,
	ScrollRestoration,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom'
import Article, { accessibleImage, imageResizer } from './Article'
import Projects from './Projects'
import SubHeader from './SubHeader'
import Contact from './Contact'
import Annonce from './Annonce'

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

			a {color: inherit}
			button {border: none; background: none; cursor: pointer}
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

/*
var frontMatterReq = require.context(

	'!json-loader!front-matter-loader!./articles',
	false,
	/\.md$/
)
*/
const frontMatterReq = import.meta.webpackContext(
	'!json-loader!front-matter-loader!./articles'
)
const frontMatters = [...frontMatterReq.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	frontMatterReq(key),
])

const req = import.meta.webpackContext('./articles')
const mds = [...req.keys()].map((key) => [
	key.replace('./', '').replace('.md', ''),
	req(key).default,
])

export const parsedArticles = mds.map(([id, data]) => ({
	...frontMatters.find(([fid]) => fid === id)[1],
	body: data,
	id,
}))

export default () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Liste articles={parsedArticles} />,
		},
		{ path: 'contact', element: <Contact /> },
		{ path: ':id', element: <Article /> },
		{ path: '*', element: <NoMatch /> },
	])
	return <RouterProvider router={router} />
}

export const Header = () => (
	<header
		css={`
			display: flex;
			align-items: center;
			margin-bottom: 1rem;
			justify-content: center;
			position: relative;
		`}
	>
		<img
			css={`
				width: 5rem;
				margin: 0 1rem;
				border-radius: 3rem;
				box-shadow: var(--shadow-elevation-high);
			`}
			src="/images/profil.png"
		/>
		<h1
			css={`
				top: 0.1rem;
				position: absolute;
				width: 5rem;
				text-align: center;
				color: white;
				font-size: 100%;
				opacity: 0.9;
			`}
		>
			Maël THOMAS
		</h1>
		<div
			css={`
				position: absolute;
				bottom: 0.2rem;
				img {
					width: 1.8rem;
					height: 1.8rem;
					vertical-align: bottom;
				}
			`}
		>
			<a href="/contact" title="Me contacter">
				<img src={'/images/lettre.svg'} />
			</a>
		</div>
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

let Liste = ({ articles }) => (
	<main css={pageLayout}>
		<ScrollRestoration />
		<Header />

		<Projects />
		<Annonce />
		<SubHeader>
			<img src="https://openmoji.org/data/color/svg/2935.svg" />
			<h2>
				<em>Quelques textes</em> sur notre environnement, nos villes et nos
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
						key={a.id}
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
		<a rel="me" href="https://boitam.eu/@maeool">
			Mastodon
		</a>
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
