import { FC, useState } from 'react'
import cl from '@/components/UI/products/products-left/ProductsLeft.module.scss'
import cn from 'classnames'

export const ProductsSizes: FC<{ sizes: string[] }> = ({ sizes }) => {
	const [currentSize, setCurrentSize] = useState<number>(0)

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
