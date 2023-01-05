import type { AppProps } from 'next/app'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistor, store } from '@/store/store'
import NextNProgress from 'nextjs-progressbar'
import '../app/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<NextNProgress color="#FF7652" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</>
	)
}
