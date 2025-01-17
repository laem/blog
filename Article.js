import React, { useEffect, useState } from 'react'
import { parsedArticles } from './Accueil'
import { useParams, ScrollRestoration } from 'react-router-dom'
import { dateCool } from './Accueil'
import Meta from './Meta'
import SmallHeader from './SmallHeader'

export default ({}) => {
	const { id } = useParams()
	const foundArticle = parsedArticles.find(({ id: id2 }) => id === id2)
	const [theOne, setTheOne] = useState(foundArticle)

	const [lastEditDate, setLastEditDate] = useState(null)
	useEffect(() => {
		if (theOne) return

		const doFetch = async () => {
			const req = await fetch('https://brave-starling-23.deno.dev/note/' + id)
			const json = await req.json()

			setTheOne({ ...json, privateNote: true })
			if (json.attributes.modified) setLastEditDate(json.attributes.modified)
		}
		doFetch()
	}, [theOne, setTheOne, id])
	useEffect(() => {
		if (!theOne || lastEditDate) return

		getLastEdit(id, setLastEditDate)
	}, [id, setLastEditDate, lastEditDate, theOne])

	if (!theOne) return null

	const {
		attributes: {
			titre,
			date: stringDate,
			created: stringDate2,
			image: imageRawFail,
			dégradé,
			résumé,
			'couleur du texte': textColor,
		},
		body,
	} = theOne

	const imageRaw = imageRawFail || {}
	const { image, imageAlt } = accessibleImage(imageRaw, résumé)

	const date = new Date(stringDate || stringDate2 || null)

	const publishDate = dateCool(date)
	const updateDate = dateCool(lastEditDate)

	return (
		<div
			css={`
				padding: 1rem;
				${dégradé &&
				`
					background:  linear-gradient(${dégradé[0]}, ${dégradé[1]}); 

				${
					!textColor &&
					`color: white;
				a {color: inherit};`
				}

						`}
				${textColor && `color: ${textColor};`}
				${textColor && `hr {border-color: ${textColor} !important}`}
			`}
		>
			<ScrollRestoration />
			<Meta
				{...{
					title: titre,
					description: résumé,
					image,
					url: 'https://kont.me/' + id,
					published: date.toISOString(),
					updated: lastEditDate,
				}}
			/>

			<div css={() => articleStyle}>
				<SmallHeader />
				{image && (
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
				)}
				<p
					css={`
						text-align: center;
						font-style: italic;
						opacity: 0.8;
						margin-bottom: 2rem;
					`}
				>
					<small>
						Publié le {publishDate}
						{publishDate !== updateDate && (
							<span>
								, mis à jour le{' '}
								<a
									href={`https://github.com/${repo}/blob/master/articles/${id}.md`}
								>
									{updateDate}
								</a>
							</span>
						)}
						.
					</small>
				</p>
				<div dangerouslySetInnerHTML={{ __html: body }} />
				<hr />
				{!theOne.privateNote && (
					<p>
						<span
							css={`
								font-size: 200%;
								vertical-align: middle;
							`}
						>
							🦋
						</span>{' '}
						Venez discuter de cet article{' '}
						<a
							className="twitter-share-button"
							href={'https://bsky.app/profile/maeool.bsky.social'}
							target="_blank"
							data-size="large"
						>
							sur Bluesky
						</a>
					</p>
				)}
			</div>
		</div>
	)
}

//const ImageRenderer = ({ src }) => <img src={imageResizer('l')(src)} />

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
		max-width: 100%;
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
