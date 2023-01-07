import { FiltersData } from '@/components/UI/filters/Filters.data'
import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'
import cl from './Fitlers.module.scss'

interface FilterProps {
	category: number
	setCategory: Dispatch<SetStateAction<number>>
}

export const Filters: FC<FilterProps> = ({category,setCategory}) => {

	return (
		<ul className={cl.list}>
			{FiltersData.map((item, idx) => (
				<li onClick={() => setCategory(idx)} className={cn(cl.item, {
					[cl.active]: category === idx
				})} key={item.title}>
					<span className={cl.title}>{item.title}</span>
				</li>
			))}
		</ul>
	)
}
