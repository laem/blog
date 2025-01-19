import { styled } from 'next-yak'
import Link from 'next/link'

export default () => (
	<Nav>
		<Link href="/">
			<img alt="logo dégradé de l'orange vers le mauve" src="/profil.png" />
		</Link>
	</Nav>
)

const Nav = styled.nav`
	max-width: 55rem;
	margin: 0 auto;
	img {
		width: 3rem;
		margin: 1rem 0;
		display: inline;
	}
	a {
		text-decoration: none;
		img {
			width: 5rem;
			margin: 0 1rem;
			border-radius: 3rem;
			box-shadow: var(--shadow-elevation-high);
		}
	}
`
