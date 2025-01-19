import { Body } from '@/components/Body'

export const metadata = {
	title: 'Le blog de Maël THOMAS-QUILLÉVÉRÉ',
	description: `Bienvenue sur mon blog. J'y présente mes projets personnels et professionnels, ainsi que quelques articles et essais sur l'écologie, l'urbanisme (nos villes, notre territoire, le vélo et la voiture), la politique, la sociologie, la pédagogie sur les algorithmes.`,
	metadataBase: new URL('https://kont.me'),
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<Body>{children}</Body>
		</html>
	)
}
