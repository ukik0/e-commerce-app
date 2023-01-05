import { Dispatch, FC, SetStateAction } from 'react'
import cl from '@/components/UI/products/products-left/ProductsLeft.module.scss'
import cn from 'classnames'

interface ProductTypesProps {
	types: string[]
	currentType: number
	setCurrentType: Dispatch<SetStateAction<number>>
}

export const ProductsTypes: FC<ProductTypesProps> = ({ types,setCurrentType,currentType }) => {

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
