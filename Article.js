import React from 'react'
import ReactMarkdown from 'react-markdown'

export default ({
	data: {
		attributes: { id },
		body,
	},
}) => (
	<div>
		<ReactMarkdown source={body} />
	</div>
)
