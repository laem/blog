import { styled } from 'next-yak'
import Link from 'next/link'

export default () => (
	<Nav>
		<Link href="/" title="Retour au blog">
			<img alt="logo dégradé de l'orange vers le mauve" src="/profil.png" />
		</Link>
	</Nav>
)

const Nav = styled.nav`
	width: fit-content;
	margin: 0 auto;
	img {
	}
	a {
		text-decoration: none;
		img {
			width: 3.5rem;
			margin: 1rem 0;
			display: inline;
			border-radius: 3rem;
			box-shadow: var(--shadow-elevation-high);
		}
	}
`
