import { ISort } from '@/components/UI/sort-menu/Sort.interface'

export const options: ISort[] = [
	{ value: 'Цена по возростанию', label: 'Цена (по возростанию)', type: 1, category: 'price' },
	{ value: 'Цена по убыванию', label: 'Цена (по убыванию)', type: -1, category: 'price' },
	{ value: 'Название по возрастанию', label: 'Название (Возрастание)', type: 1, category: 'title' },
	{ value: 'Название по убыванию', label: 'Название (Убывание)', type: -1, category: 'title' },
]