export const repo = 'laem/blog'

export const dateCool = (date) =>
	new Date(date).toLocaleString('fr-FR', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})

export const getLastEdit = async (name) => {
	try {
		const url = `https://api.github.com/repos/${repo}/commits?path=articles%2F${name}.mdx&page=1&per_page=1`

		const request = await fetch(url)

		const json = await request.json()

		const date = json[0].commit.committer.date
		return date
	} catch (e) {
		return null
	}
}

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
