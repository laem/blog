import React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({
	data: {
		attributes: { id },
		body,
	},
}) => (
	<div
		css={`
			max-width: 800px;
			margin: 0 auto;
			padding: 1rem;
		`}
	>
		<ReactMarkdown source={body} />
	</div>
)
