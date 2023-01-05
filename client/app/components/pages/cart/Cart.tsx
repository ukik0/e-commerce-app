import { Layout } from '@/components/layouts/Layout'
import { Heading } from '@/components/UI/heading/Heading'
import { useTypedSelector } from '@/hooks/useTypedSelector'
import { CartItem } from '@/components/pages/cart/cart-item/CartItem'
import { useCallback } from 'react'
import { useActions } from '@/hooks/useActions'
import cl from './Cart.module.scss'


//TODO: Добавить возможность увеличения и уменьшения товаров
export const Cart = () => {
	const {clearCart} = useActions()
	const {products} = useTypedSelector((state) => state.cart)

	const handleClearCart = useCallback(() => {
		clearCart()
	}, [])

	return (
		<Layout title={'Корзина'}>
			<div className='container'>
				<Heading title={'Ваша корзина:'}/>
				<button onClick={handleClearCart}>Очистить корзину</button>

				<ul className={cl.list}>

					{products.map((product) => <CartItem product={product} key={product._id}/>)}

					<div className={cl.bottom}>
						<div className={cl.all}>Всего товаров: <span>{products.length} шт.</span></div>

						<div className={cl.summary}>
							Сумма заказа <span>900 ₽</span>
						</div>
					</div>

					<div className={cl.wrapper}>
						<div></div>
						<button className={cl.btn}>
							Оплатить сейчас
						</button>
					</div>
				</ul>
			</div>
		</Layout>
	)
}