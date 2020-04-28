import React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({
	data: {
		attributes: { image, id },
		body,
	},
}) => (
	<div css={() => articleStyle}>
		<img css="max-height: 30rem;" src={image}></img>
		<ReactMarkdown
			renderers={{ image: ImageRenderer }}
			source={body}
			escapeHtml={false}
		/>
	</div>
)

const ImageRenderer = ({ src }) => (
	<img
		src={src.includes('imgur.com') ? src.replace(/\.(png|jpg)$/, 'h.jpg') : src}
	/>
)

const articleStyle = `
	max-width: 800px;
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
	}
	hr {
		border: 1px solid #eee;
		width: 70%;
		margin: 2rem auto;
	}
	blockquote {
		border-left: 6px solid grey;
		padding-left: 1rem;
		margin-left: 0;
	}
	code {
		background: #eee;
		padding: 0.1rem 0.4rem;
		border-radius: 0.3rem;
	}
	`
