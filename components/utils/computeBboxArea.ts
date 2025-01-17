const earthRadius = 6371008.8

export default function (bbox) {
	const [south, west, north, east] = bbox

	const surface =
		(earthRadius *
			earthRadius *
			Math.PI *
			Math.abs(Math.sin(rad(south)) - Math.sin(rad(north))) *
			(east - west)) /
		180
	return surface
}

// rad is:
function rad(num) {
	return (num * Math.PI) / 180
}
