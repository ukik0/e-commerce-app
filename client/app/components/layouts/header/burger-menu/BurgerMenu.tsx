import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from '@/components/layouts/header/burger-menu/menu/Menu'
import { useOutside } from '@/components/layouts/hooks/useOutside'
import { menuData } from '@/components/layouts/header/burger-menu/menu/Menu.data'
import cn from 'classnames'
import cl from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
	const {ref, isShow, setIsShow} = useOutside(false)

	return (
		<div ref={ref} className={cn(cl.wrapper, {
			[cl.active]: isShow
		})}>
			<button className={cl.button} onClick={() => setIsShow((prev) => !prev)}>
				{!isShow ? <FiMenu/> : <FiX/>}
			</button>
			<Menu open={isShow} menu={menuData}/>
		</div>
	)
}