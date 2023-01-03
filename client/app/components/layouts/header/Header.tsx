import { BurgerMenu } from '@/components/layouts/header/burger-menu/BurgerMenu'
import { Search } from '@/components/layouts/header/search/Search'
import Link from 'next/link'
import cl from './Header.module.scss'

export const Header = () => {
	return (
		<div className={cl.wrapper}>
			<div className="container">
				<header className={cl.header}>
					<BurgerMenu />
					<div />
					<Search />
					<Link href={'/login'} className={cl.auth}>
						Войти
					</Link>
				</header>
			</div>
		</div>
	)
}
