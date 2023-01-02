import { IMenuData } from '@/components/layouts/header/burger-menu/menu/Menu.interface'
import { FiFilm, FiHome, FiShoppingCart, FiTv } from 'react-icons/fi'

export const menuData: IMenuData[] = [
	{ icon: FiHome, href: '/', title: 'Главная' },
	{ icon: FiFilm, href: '/films', title: 'Фильмы' },
	{ icon: FiTv, href: '/serials', title: 'Сериалы' },
	{ icon: FiShoppingCart, href: '/cart', title: 'Корзина' }
]
