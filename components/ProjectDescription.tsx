import projets from '@/projets.yaml'
import { styled } from 'next-yak'
import downa from 'downa'

export const encodeProjectName = (nom, noSpaces) => {
	const lower = nom.toLowerCase()
	return noSpaces ? lower.replace(/\s/g, '+') : lower
}

export default ({ name }) => {
	const selectedProject = projets.find(
		({ nom }) => encodeProjectName(nom) === name
	)
	return (
		<Wrapper>
			<p>
				<time date={selectedProject.début}>{selectedProject.début}</time>
			</p>
			<h2>{selectedProject.nom}</h2>
			<p
				dangerouslySetInnerHTML={{
					__html: downa.render(selectedProject.description),
				}}
			></p>
			<p>
				<img src="/1F517.svg" />
				<a href={selectedProject.lien}>
					{selectedProject.lien.replace('https://', '')}
				</a>
			</p>
			{selectedProject.code && (
				<p>
					<img src="/Git-Icon-White.svg" />
					<a href={selectedProject.code}>Le code est ouvert</a>
				</p>
			)}
		</Wrapper>
	)
}

const Wrapper = styled.section`
	background: #4e2f5a;
	color: white;
	padding: 0.6rem 1rem;
	p {
		margin: 0.4rem 0 0.6rem;
		img {
			height: 1.5em;
			vertical-align: middle;
			margin-right: 0.4rem;
		}
	}
`
