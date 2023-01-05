import { Layout } from '@/components/layouts/Layout'
import { Hero } from '@/components/UI/hero/Hero'
import { Heading } from '@/components/UI/heading/Heading'
import { ProductList } from '@/components/UI/products/product-list/ProductList'
import { FC } from 'react'
import { IProduct } from '@/types/product.interface'

interface IHome {
	products: IProduct[]
}

export const Home: FC<IHome> = ({products}) => {

	return (
		<Layout title={'Главная страница'}>
			<Hero />
			<div className="container">
				<Heading title={'Наши товары'} />
				<ProductList products={products!}/>
			</div>
		</Layout>
	)
}
