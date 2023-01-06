import { Layout } from '@/components/layouts/Layout'
import { Heading } from '@/components/UI/heading/Heading'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CartItem } from '@/components/pages/cart/cart-item/CartItem'
import { useCallback } from 'react'
import { useActions } from '@/hooks/useActions'
import { EmptyCart } from '@/components/pages/cart/empty-cart/EmptyCart'
import { CartBottom } from '@/components/pages/cart/cart-bottom/CartBottom'
import cl from './Cart.module.scss'

//TODO: Добавить возможность увеличения и уменьшения товаров
export const Cart = () => {
	const { clearCart } = useActions()
	const { products } = useTypedSelector((state) => state.cart)

	const handleClearCart = useCallback(() => {
		clearCart()
	}, [])

	return (
		<Layout title={'Корзина'}>
			<div className='container'>
				{products.length !== 0 ? (
					<>
						<Heading title={'Ваша корзина:'} />
						<button onClick={handleClearCart}>
							Очистить корзину
						</button>
						<ul className={cl.list}>
							{products.map((product) => (
								<CartItem product={product} key={product.size} />
							))}
						</ul>

						<CartBottom products={products}/>
					</>
				) : <EmptyCart/> }
			</div>
		</Layout>
	)
}
