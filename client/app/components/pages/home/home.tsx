import { Layout } from '@/components/layouts/Layout'
import { Hero } from '@/components/pages/home/hero/Hero'
import { Heading } from '@/components/UI/heading/Heading'
import { ProductList } from '@/components/UI/products/product-list/ProductList'
import { FC, useState } from 'react'
import { Filters } from '@/components/UI/filters/Filters'
import { IProduct } from '@/types/product.interface'

interface IHome {
	products: IProduct[]
}
export const Home: FC<IHome> = ({products}) => {
	const [activeItem, setActiveItem] = useState<number>(0)
	const filteredProducts = activeItem > 0 ? products.filter((product) => product.category === activeItem) : products

	return (
		<Layout title={'Главная страница'}>
			<Hero />
			<div className="container">
				<Heading title={'Наши товары'} />
				<Filters activeItem={activeItem} setActiveItem={setActiveItem}/>
				<ProductList products={filteredProducts!}/>
			</div>
		</Layout>
	)
}
