import { FC, useState } from 'react'
import { IProduct } from '@/types/product.interface'
import { Modal } from '@/components/UI/modal/Modal'
import { ProductsLeft } from '@/components/UI/products/products-left/ProductsLeft'
import { ProductsRight } from '@/components/UI/products/products-right/ProductsRight'
import cl from '../Products.module.scss'

export const ProductItem: FC<{ product: IProduct }> = ({ product }) => {
	const [active, setActive] = useState<boolean>(false)

	return (
		<>
			<div className={cl.wrapper} onClick={() => setActive( true)}>
				<img src={`http://localhost:8001${product.image}`} alt={product.title} />
				<div className={cl.bottom}>
					<h3 className={cl.title}>{product.title}</h3>
					<p className={cl.description}>{product.description}</p>
					<div className={cl.bot}>
						<span className={cl.price}>{product.price} Р</span>
						<button className={cl.button} onClick={() => setActive(prev => true)}>Подробнee</button>
					</div>
				</div>
			</div>

			<Modal active={active} setActive={setActive} >
				<ProductsLeft product={product}/>
				<ProductsRight product={product}/>
			</Modal>
		</>
	)
}
