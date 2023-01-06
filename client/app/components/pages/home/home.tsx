import { Layout } from '@/components/layouts/Layout'
import { Hero } from '@/components/pages/home/hero/Hero'
import { Heading } from '@/components/UI/heading/Heading'
import { ProductList } from '@/components/UI/products/product-list/ProductList'
import { FC, useState } from 'react'
import { Filters } from '@/components/UI/filters/Filters'
import { IProduct } from '@/types/product.interface'
import { SortMenu } from '@/components/UI/sort-menu/SortMenu'
import { useTypedSelector } from '@/hooks/useTypedSelector'

interface IHome {
	products: IProduct[]
}
export const Home: FC<IHome> = ({ products }) => {
	const [activeItem, setActiveItem] = useState<number>(0)
	const filteredProducts = activeItem > 0 ? products.filter((product) => product.category === activeItem) : products
	const {sort} = useTypedSelector((state) => state.sort)

	const sortedFilter = filteredProducts.sort((a, b) =>
		sort === 1 ? a.price - b.price : b.price - a.price
	)

	return (
		<Layout title={'Главная страница'}>
			<Hero />
			<div className="container">
				<Heading title={'Наши товары'} />
				<div className="flex items-start justify-between gap-10">
					<Filters activeItem={activeItem} setActiveItem={setActiveItem} />
					<SortMenu />
				</div>
				<ProductList products={sortedFilter!} />
			</div>
		</Layout>
	)
}
