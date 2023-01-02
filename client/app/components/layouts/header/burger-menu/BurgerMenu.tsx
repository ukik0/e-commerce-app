import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from '@/components/layouts/header/burger-menu/menu/Menu'
import { useOutside } from '@/components/hooks/useOutside'
import { menuData } from '@/components/layouts/header/burger-menu/menu/Menu.data'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cn from 'classnames'
import cl from './BurgerMenu.module.scss'

export const BurgerMenu = () => {
	const {ref, isShow, setIsShow} = useOutside(false)
	const {events} = useRouter()

	useEffect(() => {
		events.on('routeChangeComplete', () => setIsShow(false));
	}, []);

	return (
		<div ref={ref} className={cn(cl.wrapper, {
			[cl.active]: isShow
		})}>
			<button className={cl.button} onClick={() => setIsShow((prev) => !prev)}>
				{!isShow ? <FiMenu/> : <FiX/>}
			</button>
			<Image src={'/img/logo.png'} alt={''} width={90} height={90} className={cl.logo} priority/>
			<Menu open={isShow} menu={menuData}/>
		</div>
	)
}