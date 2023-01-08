import { Layout } from '@/components/layouts/Layout'
import { Hero } from '@/components/pages/home/hero/Hero'
import { Heading } from '@/components/UI/heading/Heading'
import { ProductList } from '@/components/UI/products/product-list/ProductList'
import { useState } from 'react'
import { Filters } from '@/components/UI/filters/Filters'
import { SortMenu } from '@/components/UI/sort-menu/SortMenu'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { api } from '@/store/api/api'


export const Home = () => {
	const [category, setCategory] = useState<number>(0)
	const {sortBy, sortType} = useTypedSelector((state) => state.sort)
	const {data: filteredProducts, isLoading, isError} = api.useGetProductsQuery({ category, sortType, sortBy })

	if (isError) return <h1>Error</h1>


	return (
		<Layout title={'Главная страница'}>
			<Hero />
			<div className="container">
				<Heading title={'Наши товары'} />
				<div className="flex items-start justify-between gap-10">
					<Filters category={category} setCategory={setCategory} />
					<SortMenu />
				</div>
				{isLoading ? <h1>Loading...</h1> : <ProductList products={filteredProducts!} />}
			</div>
		</Layout>
	)
}
