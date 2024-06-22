import React, { useState } from 'react'
import projets from './projets.yaml'
import SubHeader from './SubHeader'
import { Link, useLocation } from 'react-router-dom'
import ProjectDescription, { encodeProjectName } from './ProjectDescription'

function useQuery() {
	const { search } = useLocation()

	return React.useMemo(() => new URLSearchParams(search), [search])
}

export default () => {
	const query = useQuery(),
		selectedProjectName = query.get('projet')

	console.log(selectedProjectName)

	const selectedProject = projets.find(
		({ nom }) => encodeProjectName(nom) === selectedProjectName
	)

	return (
		<div
			css={`
				margin: 0 0 2rem;
				@media (max-width: 800px) {
					margin: 0 0 1rem;
				}
			`}
		>
			<SubHeader>
				<h2>
					<em>Mes projets</em>
				</h2>
				<img
					css="transform: none !important"
					src="https://openmoji.org/data/color/svg/2194.svg"
				/>
			</SubHeader>
			<ul
				css={`
					display: flex;
					flex-wrap: wrap;
					list-style-type: none;
					justify-content: center;
					align-items: center;
					padding-left: 0;
					flex-wrap: nowrap;
					overflow-x: auto;
					justify-content: normal;
					background: linear-gradient(0% #4d2d5b, 100% #7b3657);
					@media (max-width: 800px) {
						scrollbar-width: none;
						margin: 0;
					}
					li {
						padding: 0.1rem 0rem;
						margin: 0.4rem;
						border-radius: 0.4rem;
						line-height: 1.6rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						box-shadow: 0.5px 1px 1px hsl(var(--shadow-color) / 0.7);
						--shadow-color: 0deg 0% 50%;
						min-width: 10rem;
						${selectedProject
							? `height: 10rem`
							: `height: 8rem; 
						@media (max-width: 800px) {
							height: 6rem;
						}
						`}
						text-align: center;
						transition: height 0.2s ease-in;
					}
					li img {
						border-top-right-radius: 0.4rem;
						border-top-left-radius: 0.4rem;
						width: 60%;
						object-fit: cover;
						transition: height 0.3s ease-in;
						${selectedProject
							? `height: 8rem`
							: `height: 6rem; 
						@media (max-width: 800px) {
							height: 4rem;
						}
						`}
					}
					li img:hover,
					li img:active {
					}
					li h3 {
						font-size: 100%;
						margin: 0.2rem;
						margin-top: auto;
						color: #4d2d5b;
					}
				`}
			>
				{projets
					.sort(
						(a, b) =>
							-(a.poids * 10000 || a.début) + (b.poids * 10000 || b.début)
					)
					.map(({ lien, nom, image, github }) => (
						<Link
							key={lien}
							to={
								selectedProject && selectedProject.nom === nom
									? '/'
									: '/?projet=' + encodeProjectName(nom, true)
							}
						>
							<li key={lien}>
								<img src={image} />
								<h3>{nom}</h3>
							</li>
						</Link>
					))}
			</ul>
			{selectedProjectName && <ProjectDescription name={selectedProjectName} />}
		</div>
	)
}
