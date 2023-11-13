import { Link } from 'react-router-dom'

export default () => (
	<div
		css={`
			background: linear-gradient(to right, #311e4b, #863754);
			max-width: 30rem;
			margin: 0 auto;
			color: white;
			padding: 0.2rem 1.5rem;
			border-radius: 0.3rem;
			margin-bottom: 1rem;
		`}
	>
		<p>
			En <strong>janvier 2024</strong>, je serai ouvert à de nouvelles missions
			à impact sur les grands défis du moment (climat et écologie en général,
			énergie, urbanisme et politiques cyclables, etc.).
		</p>
		<p>
			Développement Web, conception de simulateurs, modèles de calcul et de
			données, expertise métier, communication, rédaction, UX, graphisme : je
			prends les casquettes qu'il faut pour lancer de nouveaux projets de façon
			frugale jusqu'à atteindre une masse critique justifiant un budget plus
			important.
		</p>
		<p css={'display: flex; align-items: center; a {padding-bottom: .1rem}'}>
			<span css="margin-right: .3rem">✉️ </span>
			<Link to="/contact">Contactez-moi</Link>
		</p>
	</div>
)
