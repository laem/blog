import React from 'react'
import ReactMarkdown from 'react-markdown'
import { pageLayout } from './Accueil'

export default ({
	data: {
		attributes: { id },
		body,
	},
}) => (
	<div
		css={`
			${pageLayout}
		`}
	>
		<ReactMarkdown source={body} />
	</div>
)
