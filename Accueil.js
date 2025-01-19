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
import SubHeaden from './SubHeader'
import Contact from './Contact'
import Annonce from './Annonce'

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
		{false && <Annonce />}
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
		></section>
		<a rel="me" href="https://bsky.app/profile/mael.kont.me">
			Bluesky
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
