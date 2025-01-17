import { styled } from 'next-yak'
import Image from 'next/image'

export const mdxComponents: MDXComponents = {
	img: ({ src, alt }) => {
		if (src.startsWith('http')) return <img src={src} alt={alt} />
		const computedSrc = src.startsWith('/') ? src : '/blog-images/' + src
		return (
			<ImageContainer className="image-container">
				<Image src={computedSrc} alt={alt} layout="fill" objectFit="contain" />
			</ImageContainer>
		)
	},
}

const ImageContainer = styled.span`
	position: relative;
	width: 100%;
	padding-bottom: 1vh;
`
