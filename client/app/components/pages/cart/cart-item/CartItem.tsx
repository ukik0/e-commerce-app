import { FC, MouseEvent, useCallback } from 'react'
import { IoIosClose } from 'react-icons/io'
import { IProduct } from '@/types/product.interface'
import { useActions } from '@/hooks/useActions'
import cn from 'classnames'
import cl from './CartItem.module.scss'

interface CartItemProps {
	product: IProduct
}

export const CartItem: FC<CartItemProps> = ({product}) => {
	const {removeFromCart, incrementCount, decrementCount} = useActions()

	const handleRemoveProduct = useCallback((event: MouseEvent<SVGElement>) => {
		removeFromCart(product)
	}, [])

	const decrementProductCount = () => {
		product.count > 1 ? decrementCount(product) : null
	}

	const incrementProductCount = () => {
		product.count < 3 ? incrementCount(product) : null
	}

	return (
		<li className={cl.item}>
			<img src={`http://localhost:8001${product.image}`} alt={product.title} />
			<div className={cl.info}>
				<h6 className={cl.title}>{product.title}</h6>
				<p className={cl.type}>{product.type}, {product.size}.</p>
			</div>

			<span className={cl.price}>{product.price * product.count} ₽</span>

			<div className={cl.buttons}>
				<button className={cn(cl.btn, {
					[cl.block]: product.count <= 1
				})} onClick={decrementProductCount}>-</button>
				<span>{product.count}</span>
				<button className={cn(cl.btn, {
					[cl.block]: product.count >= 3
				})} onClick={incrementProductCount}>+</button>
			</div>

			<IoIosClose className={cl.icon} onClick={handleRemoveProduct} />
		</li>
	)
}