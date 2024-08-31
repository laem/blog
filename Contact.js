import { Header } from './Accueil'
import SmallHeader from './SmallHeader'
export default () => (
	<div css="padding: 1rem .6rem">
		<SmallHeader />
		<div css="max-width: 800px; margin: 1rem auto">
			<h1>Me contacter</h1>
			<p>
				Pour parler d'un sujet ou projet public qui peut intéresser du monde, je
				suis sur <a href="https://bsky.app/profile/maeool.bsky.social">Bluesky</a>.
			</p>
			<p>
				En privé, le mieux est de m'écrire{' '}
				<a href="https://matrix.to/#/@maelito:matrix.org">via matrix.org</a>.
			</p>
			<p>
				Vous pouvez aussi{' '}
				<a href="https://www.linkedin.com/in/thomasmael/">
					me contacter via Linkedin
				</a>
				.
			</p>
		</div>
	</div>
)
