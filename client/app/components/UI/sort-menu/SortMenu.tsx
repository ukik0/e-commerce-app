import Select from 'react-select'
import { useState } from 'react'
import { useActions } from '@/hooks/useActions'
import cl from './SortMenu.module.scss'


//TODO: Возможно, сделать сортировку на сервере
export const SortMenu = () => {
	const { setSort } = useActions()
	const [value, setValue] = useState('Цена по возростанию')

	const options = [
		{ value: 'Цена по возростанию', label: 'Цена (по возростанию)', type: 1 },
		{ value: 'Цена по убыванию', label: 'Цена (по убыванию)', type: -1 }
	]

	const onChange = (choice: any) => {
		setValue(choice.value)
		setSort(choice.type)
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
