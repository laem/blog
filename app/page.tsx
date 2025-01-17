import Projects from '@/components/Projects'
import Header from '@/components/Header'

export default async function Page({ searchParams }) {
	const { projet } = await searchParams
	return (
		<main>
			<Header />
			<Projects projet={projet} />
		</main>
	)
}
