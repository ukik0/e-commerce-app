import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import { ProductItem } from '@/components/UI/products/product-item/ProductItem'
import cl from '../Products.module.scss'

interface IProductList {
	products: IProduct[]
}

export const ProductList: FC<IProductList> = ({products}) => {
	return (
		<ul className={cl.list}>
			{products?.map((product) => (
				<ProductItem key={product._id} product={product}/>
			))}
		</ul>
	)
}