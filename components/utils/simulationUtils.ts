export const encodeDottedName = (decoded) => decoded.replace(/\s\.\s/g, '.')
const decodeDottedName = (encoded) => encoded.replace(/\./g, ' . ')

const entriesFromSearchParams = (searchParams, rules) =>
	Object.entries(searchParams || {})
		.map(([k, v]) => [decodeDottedName(k), v])
		.filter(([k, v]) => rules[k] !== undefined)

export const getFoldedSteps = (searchParams, rules) =>
	entriesFromSearchParams(searchParams, rules).map(([k, v]) => k)

export const getSituation = (searchParams, rules) =>
	Object.fromEntries(
		entriesFromSearchParams(searchParams, rules).filter(([k, v]) => v !== '∅')
	) //should be changed to clearly handle defaultValues

export const encodeValue = (value) => {
	if (value == null) return '∅'

	if (typeof value === 'string') return value
	if (typeof value === 'number') return value

	if (value.valeur != null) return value.valeur //TODO units should be handled, this is dangerous
	if (value.nodeKind === 'constant' && typeof value.nodeValue === 'number')
		return value.nodeValue
	if (value.nodeKind === 'unité' && typeof value.rawNode === 'string')
		return value.rawNode

	console.log('ENCODEVALUE', value)
	throw new Error('Unhandled value format')
}

export const encodeSituation = (situation, doEncodeValue = false) =>
	Object.fromEntries(
		Object.entries(situation).map(([k, v]) => [
			encodeDottedName(k),
			doEncodeValue ? encodeValue(v) : v,
		])
	)
