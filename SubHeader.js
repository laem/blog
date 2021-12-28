import styled from 'styled-components'

export default styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	h2 {
		font-size: 120%;
		font-weight: normal;
		max-width: 20rem;
		margin: 0.6rem 0;
		/*
					border-bottom: 2px solid #fe9d00;
					padding: 0.2rem 0.4rem;
					color: #38255c;
					*/
	}

	h2 em {
		background: linear-gradient(to right, #311e4b, #863754);
		font-style: normal;
		color: white;
		padding: 0rem 0.4rem 0.1rem;
	}
	> img {
		width: 2rem;
		margin: 0 0.4rem;
		transform: scale(-1, 1) translateY(0.5rem);
	}
`
