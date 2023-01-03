import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import { URL } from '@/utils/axios'
import cl from '../Products.module.scss'

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={cl.wrapper}>
			<img src={`${URL}${product.image}`} alt={product.title} />
			<div className={cl.bottom}>
				<h3 className={cl.title}>{product.title}</h3>
				<p className={cl.description}>{product.description}</p>
				<div className={cl.bot}>
					<span className={cl.price}>{product.price} Р</span>
					<button className={cl.button}>Подробнee</button>
				</div>
			</div>
		</div>
	)
}
