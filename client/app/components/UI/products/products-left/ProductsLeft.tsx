import { FC, useCallback, useState } from 'react'
import { IProduct } from '@/types/product.interface'
import { ProductsSizes } from '@/components/UI/products/products-left/ProductsSizes'
import { ProductsTypes } from '@/components/UI/products/products-left/ProductsTypes'
import { useActions } from '@/hooks/useActions'
import cl from './ProductsLeft.module.scss'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { toastr } from 'react-redux-toastr'

export const ProductsLeft: FC<{ product: IProduct }> = ({ product }) => {
	const {addToCart} = useActions()
	const {products} = useTypedSelector((state) => state.cart)
	const [currentType, setCurrentType] = useState<number>(0)
	const [currentSize, setCurrentSize] = useState<number>(0)
	const isProductInCart = products.some((item) => item._id === product._id)

	const addProduct = useCallback(() => {
		addToCart({ ...product, type: [product.type[currentType]], size: [product.size[currentSize]] })
		toastr.success('Товар', `${product.title} добавлен в корзину`)
	}, [currentType, currentSize])

	return (
		<div className={cl.left}>
			<img src={`http://localhost:8001${product.image}`} alt={product.title} />
			<ProductsTypes currentType={currentType} setCurrentType={setCurrentType} types={product.type} />
			<ProductsSizes currentSize={currentSize} setCurrentSize={setCurrentSize} sizes={product.size} />
			<button className={cl.btn} onClick={addProduct}>
				{isProductInCart ? 'Товар уже в корзине' : 'Добавить в корзину'}
			</button>
		</div>
	)
}
