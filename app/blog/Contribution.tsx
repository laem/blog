import { styled } from 'next-yak'
import Link from 'next/link'

export default function Contribution({
	slug,
	issueNumber,
	text = '✏️ Signaler une erreur',
}) {
	return (
		<ContributionLink
			href={
				slug
					? `https://github.com/cartesapp/cartes/edit/master/articles/${slug}.mdx`
					: `https://github.com/cartesapp/cartes/issues/${issueNumber}`
			}
		>
			{text}
		</ContributionLink>
	)
}

const ContributionLink = styled(Link)`
	display: block;
	margin: 0 0 0 auto;
	width: fit-content;
	margin-top: 2rem;
`
