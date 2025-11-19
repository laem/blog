import { styled } from 'next-yak'

import SmallHeader from '@/components/SmallHeader'

export default () => (
	<Container>
		<SmallHeader />
		<div>
			<h1>Me contacter</h1>
			<p>
				Pour parler d'un sujet ou projet public qui peut intéresser du monde, je
				suis sur <a href="https://bsky.app/profile/mael.kont.me">Bluesky</a>.
			</p>
			<p>
				Je suis également disponible (mais moins actif) sur suis sur{' '}
				<a href="https://mastodon.social/@maeool">Mastodon</a>.
			</p>
			<p>
				En privé, le mieux est de m'écrire{' '}
				<a href="https://matrix.to/#/@maeltq:matrix.org">via matrix.org</a>.
			</p>
		</div>
	</Container>
)

const Container = styled.section`
	padding: 1rem 0.6rem;
	> div {
		max-width: 800px;
		margin: 1rem auto;
	}
`
