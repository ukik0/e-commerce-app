import { Modal } from '@/components/UI/modal/Modal'
import { FC, useState } from 'react'
import { IProduct } from '@/types/product.interface'
import { ProductsLeft } from '@/components/UI/products/products-left/ProductsLeft'
import { ProductsRight } from '@/components/UI/products/products-right/ProductsRight'
import cl from '@/components/layouts/header/search/result/Result.module.scss'

interface ResultItemProps {
	product: IProduct
}

export const ResultItem: FC<ResultItemProps> = ({product}) => {
	const [open, setOpen] = useState<boolean>(false)


	return (
		<li key={product._id} className={cl.item}>
			<img src={`http://localhost:8001${product.image}`} alt={product.title} className={cl.img}/>

			<div className={cl.info} onClick={() => setOpen(true)}>
				<h6 className={cl.title}>{product.title}</h6>
				<p className={cl.description}>{product.description}</p>
			</div>

			<Modal active={open} setActive={setOpen} >
				<ProductsLeft product={product}/>
				<ProductsRight productId={product._id}/>
			</Modal>
		</li>
	)
}