import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from '@next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import NextNProgress from 'nextjs-progressbar'

const roboto = Roboto({
	weight: ['400', '500', '700', '900'],
	style: ['normal'],
	subsets: ['greek', 'latin']
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Provider store={store}>
				<NextNProgress height={4} color={'orange'} showOnShallow={true} stopDelayMs={20}/>
				<Component {...pageProps} />
			</Provider>
		</>
	)
}
