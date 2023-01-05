import { FC, MouseEvent, useCallback } from 'react'
import { IoIosClose } from 'react-icons/io'
import { IProduct } from '@/types/product.interface'
import { useActions } from '@/hooks/useActions'
import cl from '@/components/pages/cart/Cart.module.scss'

interface CartItemProps {
	product: IProduct
}

export const CartItem: FC<CartItemProps> = ({product}) => {
	const {removeFromCart} = useActions()

	const handleRemoveProduct = useCallback((event: MouseEvent<SVGElement>) => {
		removeFromCart(product)
	}, [])

	return (
		<li className={cl.item}>
			<img src='https://www.seekpng.com/png/full/797-7979747_80s-pikachu-acrylic-pixel-art-painting.png' alt='img' />
			<div className={cl.info}>
				<h6 className={cl.title}>{product.title}</h6>
				<p className={cl.type}>{product.type}, {product.size}.</p>
			</div>

			<span className={cl.price}>{product.price} ₽</span>

			<IoIosClose className={cl.icon} onClick={handleRemoveProduct} />
		</li>
	)
}