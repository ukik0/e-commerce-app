import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import NextNProgress from 'nextjs-progressbar'

const roboto = Roboto({
	weight: ['400', '500', '700', '900'],
	style: ['normal'],
	subsets: ['greek', 'latin']
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress height={6} color={'orange'} />
			<main className={roboto.className}>
				<Component {...pageProps} />
			</main>
		</>
	)
}
