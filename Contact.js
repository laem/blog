import { Header } from './Accueil'
import SmallHeader from './SmallHeader'
export default () => (
	<div css="padding: 1rem .6rem">
		<SmallHeader />
		<div css="max-width: 800px; margin: 1rem auto">
			<h1>Me contacter</h1>
			<p>
				Pour parler d'un sujet ou projet public qui peut intéresser du monde, je
				suis sur <a href="https://boitam.eu/@maeool">Mastodon</a> et{' '}
				<a href="https://twitter.com/maeool">twitter</a>.
			</p>
			<p>
				En privé, le mieux est de m'écrire via matrix.org, c'est{' '}
				<a href="https://matrix.to/#/@maelito:matrix.org">par ici</a>.
			</p>
			<p>
				Voici mon{' '}
				<a href="https://www.linkedin.com/in/thomasmael/">
					profil professionnel Linkedin
				</a>
				.
			</p>
		</div>
	</div>
)
