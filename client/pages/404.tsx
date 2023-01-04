import { Layout } from '@/components/layouts/Layout'
import { NotFound } from '@/components/pages/not-found/NotFound'
import { NextPage } from 'next'

const page404: NextPage = () => {

	return (
		<Layout title={'Страницы не существует'}>
			<NotFound/>
		</Layout>
	)
}

export default page404