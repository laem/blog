import React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({
	data: {
		attributes: { image, id },
		body,
	},
}) => (
	<div
		css={`
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
		`}
	>
		<img
			css="    max-height: 30rem;
"
			src={image}
		></img>
		<ReactMarkdown source={body} escapeHtml={false} />
	</div>
)
