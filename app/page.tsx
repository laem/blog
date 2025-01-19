import Projects from '@/components/Projects'
import Header from '@/components/Header'
import SubHeader from '@/components/SubHeader'
import ArticlesList from '@/components/ArticlesList'

export default async function Page({ searchParams }) {
	const { projet } = await searchParams
	return (
		<main>
			<Header />
			<Projects projet={projet} />
			<SubHeader>
				<img src="https://openmoji.org/data/color/svg/2935.svg" />
				<h2>
					<em>Quelques textes</em> sur notre environnement, nos villes et nos
					algorithmes
				</h2>
			</SubHeader>
			<ArticlesList />
		</main>
	)
}
