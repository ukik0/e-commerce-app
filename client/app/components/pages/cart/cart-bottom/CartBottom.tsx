import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import cl from './CartBottom.module.scss'

interface CartBottomProps {
	products: IProduct[]
}

export const CartBottom: FC<CartBottomProps> = ({products}) => {
	return (
		<div className={cl.container}>
			<div className={cl.bottom}>
				<div className={cl.all}>
					Всего товаров: <span>{products.length} шт.</span>
				</div>

				<div className={cl.summary}>
					Сумма заказа <span>{products.reduce((acc, el) => acc + el.price, 0)} ₽</span>
				</div>
			</div>

			<div className={cl.wrapper}>
				<div></div>
				<button className={cl.btn}>Оплатить сейчас</button>
			</div>
		</div>
	)
}
