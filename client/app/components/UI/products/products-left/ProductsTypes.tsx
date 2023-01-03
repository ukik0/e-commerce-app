import { FC, useState } from 'react'
import cl from '@/components/UI/products/products-left/ProductsLeft.module.scss'
import cn from 'classnames'

export const ProductsTypes: FC<{ types: string[] }> = ({ types }) => {
	const [currentType, setCurrentType] = useState<number>(0)

	return (
		<ul className={cl.size}>
			{types.map((type, idx) => (
				<li
					key={type}
					onClick={() => setCurrentType(idx)}
					className={cn(cl[`size__item`], {
						[cl.active]: currentType === idx
					})}
				>
					{type}
				</li>
			))}
		</ul>
	)
}
