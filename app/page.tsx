import Projects from './Projects'
import SubHeader from '@/components/SubHeader'
import Contact from './Contact'
import Annonce from './Annonce'
import Header from '../components/Header'

export default async function Page({ searchParams }) {
	const { projet } = await searchParams
	return (
		<main>
			<Header />
			<Projects projet={projet} />
		</main>
	)
}
