import projets from './projets.yaml'
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
		<div
			css={`
				background: #4e2f5a;
				color: white;
				padding: 0.6rem 1rem;
				p {
					margin: 0 0 0.6rem;
				}
			`}
		>
			<p>
				<time date={selectedProject.début}>{selectedProject.début}</time>
			</p>
			<h2>{selectedProject.nom}</h2>
			<p
				dangerouslySetInnerHTML={{
					__html: downa.render(selectedProject.description),
				}}
			></p>
			<a href={selectedProject.lien}>
				{selectedProject.lien.replace('https://', '')}
			</a>
		</div>
	)
}
