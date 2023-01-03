import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import { ProductsSizes } from '@/components/UI/products/products-left/ProductsSizes'
import { ProductsTypes } from '@/components/UI/products/products-left/ProductsTypes'
import cl from './ProductsLeft.module.scss'

export const ProductsLeft: FC<{ product: IProduct }> = ({ product }) => {

	return (
		<div className={cl.left}>
			<img src={`http://localhost:8001${product.image}`} alt={product.title} />
			<ProductsTypes types={product.type} />
			<ProductsSizes sizes={product.size} />
			<button className={cl.btn}>
				Добавить в корзину
			</button>
		</div>
	)
}
