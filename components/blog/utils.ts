export const repo = 'laem/blog'

export const dateCool = (date) =>
	new Date(date).toLocaleString('fr-FR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const getLastEdit = (name, action) =>
	fetch(
		`https://api.github.com/repos/${repo}/commits?path=articles%2F${name}.md&page=1&per_page=1`
	)
		.then((res) => res.json())
		.then((json) => {
			console.log(json)
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
