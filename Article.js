import React from 'react'
import ReactMarkdown from 'react-markdown/with-html'

const thumbnailWidth = '320',
	fullWidth = '800'

export const imageResizer = (size) => (src) =>
	src.includes('imgur.com')
		? src.replace(/\.(png|jpg)$/, size + '.jpg')
		: src.includes('unsplash.com')
		? src.replace(
				/w=[0-9]+\&/,
				(_, p1) => `w=${size === 'm' ? thumbnailWidth : fullWidth}&`
		  )
		: src.includes('medium.com')
		? src.replace(
				/max\/[0-9]+\//,
				(_, p1) => `max/${size === 'm' ? thumbnailWidth : fullWidth}/`
		  )
		: src

export default ({
	data: {
		attributes: { titre, image },
		id,
		body,
	},
}) => (
	<div css={() => articleStyle}>
		<nav css="font-size: 300%; a {text-decoration: none}">
			<a href="/">📝</a>
		</nav>
		<img css="max-height: 30rem;" src={imageResizer('l')(image)}></img>
		<ReactMarkdown
			renderers={{ image: ImageRenderer }}
			source={body}
			escapeHtml={false}
		/>
		<hr />
		<p>
			<span
				css={`
					font-size: 200%;
					vertical-align: middle;
				`}
			>
				🐦
			</span>{' '}
			Venez discuter de cet article{' '}
			<a
				class="twitter-share-button"
				href={`https://twitter.com/intent/tweet?text=${titre} https://kont.me/${id} @maeool`}
				target="_blank"
				data-size="large"
			>
				sur twitter
			</a>
		</p>
	</div>
)

const ImageRenderer = ({ src }) => <img src={imageResizer('l')(src)} />

const articleStyle = `
font-size: 125%;
	max-width: 700px;
	margin: 0 auto 4rem;
	h1 {
		text-align: center;
	}
	h2,
	h3,
	h4,
	h5 {
		margin-top: 2rem;
	}
	img {
		max-width: 80%;
		margin: 2rem auto;
		display: block;
	}
	img + em {
	color: #666;
	text-align: center;
	width: 100%;
	display: inline-block;
	margin: 0 auto 1rem;
	}
	hr {
		border: 1px solid #eee;
		width: 70%;
		margin: 2rem auto;
	}
	blockquote {
		border-left: 3px solid #4d4d4d;
		padding-left: 1rem;
		margin-left: 0;
	}
	code {
		background: #eee;
		padding: 0.1rem 0.4rem;
		border-radius: 0.3rem;
	}

aside {
	border: 1px solid #ddd;
	border-radius: 0.3rem;
	box-shadow: 1px 3px 8px #ddd;
	padding: 1rem;
	margin: 2rem .6rem
	}
	aside h2, aside h3 {
margin: .3rem
	}

	`
