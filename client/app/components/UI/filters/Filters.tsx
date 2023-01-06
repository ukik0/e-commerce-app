import { FiltersData } from '@/components/UI/filters/Filters.data'
import { Dispatch, FC, SetStateAction } from 'react'
import cn from 'classnames'
import cl from './Fitlers.module.scss'

interface FilterProps {
	activeItem: number
	setActiveItem: Dispatch<SetStateAction<number>>
}

export const Filters: FC<FilterProps> = ({activeItem,setActiveItem}) => {

	return (
		<ul className={cl.list}>
			{FiltersData.map((item, idx) => (
				<li onClick={() => setActiveItem(idx)} className={cn(cl.item, {
					[cl.active]: activeItem === idx
				})} key={item.title}>
					<span className={cl.title}>{item.title}</span>
				</li>
			))}
		</ul>
	)
}
