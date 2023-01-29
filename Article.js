import React, { useState } from 'react'
import { parsedArticles } from './Accueil'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { dateCool } from './Accueil'
import Meta from './Meta'

const repo = 'laem/blog'

const getLastEdit = (name, action) =>
	fetch(
		`https://api.github.com/repos/${repo}/commits?path=articles%2F${name}.md&page=1&per_page=1`
	)
		.then((res) => res.json())
		.then((json) => {
			try {
				const date = json[0].commit.committer.date
				action(date)
			} catch (e) {
				action('')
			}
		})

const thumbnailWidth = '320',
	fullWidth = '800'

export const imageResizer = (size) => (src) =>
	src.includes('imgur.com')
		? src.replace(/\.(png|jpg)$/, (size || '') + '.png')
		: src.includes('unsplash.com')
		? src.replace(
				/w=[0-9]+\&/,
				(_, p1) => `w=${size === 'm' ? thumbnailWidth : fullWidth}&`
		  )
		: src.includes('medium.com')
		? src.replace(
				/max\/[0-9]+\//,
				(_, p1) => `max/${size === 'm' ? thumbnailWidth : fullWidth}/`
		  )
		: src

export const accessibleImage = (imageRaw, failsafe) =>
	typeof imageRaw === 'string'
		? { image: imageRaw, imageAlt: failsafe }
		: { image: imageRaw.adresse, imageAlt: imageRaw.description }

export default ({}) => {
	const { id } = useParams()
	const theOne = parsedArticles.find(({ id: id2 }) => id === id2)

	const [lastEditDate, setLastEditDate] = useState(null)

	const {
		attributes: {
			titre,
			date,
			image: imageRaw,
			dégradé,
			résumé,
			'couleur du texte': textColor,
		},
		body,
	} = theOne

	const { image, imageAlt } = accessibleImage(imageRaw, résumé)
	getLastEdit(id, setLastEditDate)

	return (
		<div
			css={`
				padding: 1rem;
				${dégradé &&
				`
					background:  linear-gradient(${dégradé[0]}, ${dégradé[1]}); 

					${
						!textColor &&
						`color: white
						; a {color: inherit}`
					}

						`}
				${textColor && `color: ${textColor}`}
				${textColor && `hr {border-color: ${textColor}}`}
			`}
		>
			<Meta
				{...{
					title: titre,
					description: résumé,
					image,
					url: 'https://kont.me/' + id,
					published: new Date(date).toISOString(),
					updated: lastEditDate,
				}}
			/>

			<div css={() => articleStyle}>
				<nav css="img {width: 3rem; margin: 1rem 0; display: inline; }; a {text-decoration: none}">
					<Link to="/">
						<img
							alt="logo dégradé de l'orange vers le mauve"
							css={`
								width: 5rem;
								margin: 0 1rem;
								border-radius: 3rem;
								box-shadow: var(--shadow-elevation-high);
							`}
							src="/images/profil.png"
						/>
					</Link>
				</nav>
				<div>
					<a href={imageRaw.source || imageResizer()(image)}>
						<img
							css="max-height: 30rem;"
							src={imageResizer('m')(image)}
							alt={imageAlt}
						></img>
					</a>
					{imageResizer.crédits && (
						<small
							css={`
								text-align: center;
								font-style: italic;
								display: block;
								color: #666;
							`}
						>
							Crédits : {imageRaw.crédits}
						</small>
					)}
				</div>
				<p
					css={`
						text-align: center;
						font-style: italic;
						opacity: 0.8;
						margin-bottom: 2rem;
					`}
				>
					<small>
						Publié le {dateCool(date)}, mis à jour le{' '}
						<a
							href={`https://github.com/${repo}/blob/master/articles/${id}.md`}
						>
							{dateCool(lastEditDate)}
						</a>
					</small>
				</p>
				<div dangerouslySetInnerHTML={{ __html: body }} />
				<hr />
				<p>
					<span
						css={`
							font-size: 200%;
							vertical-align: middle;
						`}
					>
						🐘
					</span>{' '}
					Venez discuter de cet article{' '}
					<a
						className="twitter-share-button"
						href={`https://boitam.eu/@maeool`}
						target="_blank"
						data-size="large"
					>
						sur Mastodon
					</a>
				</p>
			</div>
		</div>
	)
}

const ImageRenderer = ({ src }) => <img src={imageResizer('l')(src)} />

const articleStyle = `

    font-size: 125%;
	@media (max-width: 800px){font-size: 110%}
	max-width: 700px;
	margin: 0 auto 4rem;
	h1 {
		text-align: center;
	}
	h2,
	h3,
	h4,
	h5 {
		margin-top: 2rem;
	}
	p {line-height: 1.6rem;
    letter-spacing: .2px;

	}
	img {
		max-width: 80%;
		margin: 2rem auto;
		display: block;
	}
	img + em {
	color: #666;
	text-align: center;
	width: 100%;
	display: inline-block;
	margin: 0 auto 1rem;
	}
	hr {
		border: 1px solid #eee;
		width: 70%;
		margin: 2rem auto;
	}
	blockquote {
		border-left: 3px solid #4d4d4d;
		padding-left: 1rem;
		margin-left: 0;
	}
	code {
		background: #eee;
		padding: 0.1rem 0.4rem;
		border-radius: 0.3rem;
	}

aside {
	border: 1px solid #ddd;
	border-radius: 0.3rem;
	box-shadow: 1px 3px 8px #ddd;
	padding: 1rem;
	margin: 2rem .6rem
	}
	aside h2, aside h3 {
margin: .3rem
	}
						small {
							font-size: 70%;
						}

	`
