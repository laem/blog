import { css } from 'next-yak'

export default function Header() {
	return (
		<header
			css={css`
				display: flex;
				align-items: center;
				margin-bottom: 1rem;
				justify-content: center;
				position: relative;
			`}
		>
			<img
				css={css`
					width: 5rem;
					margin: 0 1rem;
					border-radius: 3rem;
					box-shadow: var(--shadow-elevation-high);
				`}
				src="/images/profil.png"
			/>
			<h1
				css={css`
					top: 0.1rem;
					position: absolute;
					width: 5rem;
					text-align: center;
					color: white;
					font-size: 100%;
					opacity: 0.9;
				`}
			>
				Maël THOMAS
			</h1>
			<div
				css={css`
					position: absolute;
					bottom: 0.2rem;
					img {
						width: 1.8rem;
						height: 1.8rem;
						vertical-align: bottom;
					}
				`}
			>
				<a href="/contact" title="Me contacter">
					<img src={'/images/lettre.svg'} />
				</a>
			</div>
		</header>
	)
}
