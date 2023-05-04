import { Link } from 'react-router-dom'
export default () => (
	<nav
		css={`
			img {
				width: 3rem;
				margin: 1rem 0;
				display: inline;
			}
			a {
				text-decoration: none;
			}
		`}
	>
		<Link to="/">
			<img
				alt="logo dégradé de l'orange vers le mauve"
				css={`
					width: 5rem;
					margin: 0 1rem;
					border-radius: 3rem;
					box-shadow: var(--shadow-elevation-high);
				`}
				src="/images/profil.png"
			/>
		</Link>
	</nav>
)
