import { Dispatch, FC, SetStateAction } from 'react'
import cl from '@/components/UI/products/products-left/ProductsLeft.module.scss'
import cn from 'classnames'

interface ProductSizesProps{
	sizes: string[]
	currentSize: number
	setCurrentSize: Dispatch<SetStateAction<number>>
}

export const ProductsSizes: FC<ProductSizesProps> = ({ sizes,setCurrentSize,currentSize }) => {

	return (
		<ul className={cl.size}>
			{sizes.map((size, idx) => (
				<li
					key={size}
					onClick={() => setCurrentSize(idx)}
					className={cn(cl[`size__item`], {
						[cl.active]: currentSize === idx
					})}
				>
					{size}
				</li>
			))}
		</ul>
	)
}
