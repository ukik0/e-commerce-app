import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html lang="en">
			<Head >
                <meta name='theme-color' content="#ff7652" />
            </Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
