import React, { useState } from 'react'
import projets from './projets.yaml'
import SubHeader from './SubHeader'
import downa from 'downa'

export default () => {
	const [descriptionShown, showDescription] = useState(false)

	const selectedProject = projets.find(({ nom }) => nom === descriptionShown)

	return (
		<div
			css={`
				margin: 0 0 2rem;
				@media (max-width: 800px) {
					margin: 0;
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
					height: 11rem;
					background: linear-gradient(0% #4d2d5b, 100% #7b3657);
					@media (max-width: 800px) {
						scrollbar-width: none;
						margin: 0;
					}
					li {
						padding: 0.1rem 0rem;
						margin: 0.4rem;
						border-radius: 0.2rem;
						line-height: 1.6rem;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						box-shadow: 0.5px 1px 1px hsl(var(--shadow-color) / 0.7);
						--shadow-color: 0deg 0% 50%;
						min-width: 10rem;
						height: 8rem;
						text-align: center;
					}
					li img {
						width: 100%;
						max-height: 6rem;
						object-fit: cover;
						transition: filter 0.3s ease-in;
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
				{projets.map(({ lien, nom, image, github }) => (
					<button
						onClick={() =>
							showDescription(selectedProject?.nom === nom ? false : nom)
						}
					>
						<li css={``} key={lien}>
							<img src={image} />
							<h3>{nom}</h3>
						</li>
					</button>
				))}
			</ul>
			{descriptionShown && (
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
					<p>{selectedProject.début}</p>
					<p
						dangerouslySetInnerHTML={{
							__html: downa.render(selectedProject.description),
						}}
					></p>
					<a href={selectedProject.lien}>
						{selectedProject.lien.replace('https://', '')}
					</a>
				</div>
			)}
		</div>
	)
}
