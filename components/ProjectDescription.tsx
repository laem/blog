import projets from './projets.yaml'

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
					margin: 0.4rem 0 0.6rem;
				}
			`}
		>
			<p>
				<time date={selectedProject.début}>{selectedProject.début}</time>
			</p>
			<h2>{selectedProject.nom}</h2>
			<p>{selectedProject.description}</p>
			<p>
				<img
					src="/images/1F517.svg"
					css="height: 1.5em; vertical-align: middle; margin-right: .4rem; "
				/>
				<a href={selectedProject.lien}>
					{selectedProject.lien.replace('https://', '')}
				</a>
			</p>
			{selectedProject.code && (
				<p>
					<img
						src="/images/Git-Icon-White.svg"
						css="width: 1.3rem; vertical-align: middle; margin-right: .6rem"
					/>
					<a href={selectedProject.code}>Le code est ouvert</a>
				</p>
			)}
		</div>
	)
}
