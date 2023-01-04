import { Home } from '@/components/pages/home/home'
import { NextPage } from 'next'
import { ProductsService } from '@/services/products.service'

const HomePage: NextPage = (props) => {

	return <Home {...props} />
}

export async function getStaticProps() {
	try {
		const { data: products } = await ProductsService.getProducts()
		return {
			props: {
				products
			}
		}
	} catch (e) {
		return {
			props: {
				products: []
			}
		}
	}
}

export default HomePage
