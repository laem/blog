import { css, styled } from 'next-yak'

export default function Header() {
	return (
		<HeaderWrapper>
			<img src="/profil.png" />
			<h1>Maël THOMAS</h1>
			<Contact>
				<a href="/contact" title="Me contacter">
					<img src={'/lettre.svg'} />
				</a>
			</Contact>
		</HeaderWrapper>
	)
}

const Contact = styled.div`
	position: absolute;
	bottom: 0.2rem;
	img {
		width: 1.8rem;
		height: 1.8rem;
		vertical-align: bottom;
	}
`

const HeaderWrapper = styled.header`
	display: flex;
	align-items: center;
	margin-bottom: 1rem;
	justify-content: center;
	position: relative;
	> img {
		width: 5rem;
		margin: 0 1rem;
		border-radius: 3rem;
		box-shadow: var(--shadow-elevation-high);
	}
	h1 {
		top: 0.1rem;
		position: absolute;
		width: 5rem;
		text-align: center;
		color: white;
		font-size: 100%;
		opacity: 0.9;
	}
`
