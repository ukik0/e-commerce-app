import { BurgerMenu } from '@/components/layouts/header/burger-menu/BurgerMenu'
import { Search } from '@/components/layouts/header/search/Search'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import cl from './Header.module.scss'

export const Header = () => {
	const { user } = useAuth()

	return (
		<div className={cl.wrapper}>
			<div className="container">
				<header className={cl.header}>
					<BurgerMenu />
					<div />
					<Search />
					{!user ? (
						<Link href={'/login'} className={cl.auth}>
							Войти
						</Link>
					) : (
						<div>{user.username}</div>
					)}
				</header>
			</div>
		</div>
	)
}
