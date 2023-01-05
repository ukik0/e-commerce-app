import { BurgerMenu } from '@/components/layouts/header/burger-menu/BurgerMenu'
import { Search } from '@/components/layouts/header/search/Search'
import { useAuth } from '@/hooks/useAuth'
import { UserInfo } from '@/components/layouts/header/user-info/UserInfo'
import Link from 'next/link'
import cl from './Header.module.scss'

export const Header = () => {
	const { user, isLoading }  = useAuth()

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
						<UserInfo user={user} isLoading={isLoading}/>
					)}
				</header>
			</div>
		</div>
	)
}
