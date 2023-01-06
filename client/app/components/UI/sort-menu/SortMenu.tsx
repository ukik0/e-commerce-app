import Select, { OnChangeValue } from 'react-select'
import { useState } from 'react'
import { useActions } from '@/hooks/useActions'
import { ISort } from '@/components/UI/sort-menu/Sort.interface'
import { options } from '@/components/UI/sort-menu/Sort.data'
import cl from './SortMenu.module.scss'


//TODO: Возможно, сделать сортировку на сервере
export const SortMenu = () => {
	const { setSort, setCategory } = useActions()
	const [value, setValue] = useState<string>('Цена по возростанию')

	const onChange = (choice: OnChangeValue<ISort, string | number>) => {
		setValue(choice?.value!)
		setSort(choice?.type)
		setCategory(choice?.category)
	}

	return (
		<Select
			className={cl.select}
			onChange={onChange}
			options={options}
			placeholder={'Тип сортировки'}
		/>
	)
}
