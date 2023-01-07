import { Home } from '@/components/pages/home/home'
import { NextPage } from 'next'

const HomePage: NextPage = () => {

	return <Home />
}


// export async function getStaticProps() {
// 	try {
// 		const { data: products } = await ProductsService.getProducts()
// 		return {
// 			props: {
// 				products
// 			}
// 		}
// 	} catch (e) {
// 		return {
// 			props: {
// 				products: []
// 			}
// 		}
// 	}
// }

export default HomePage
