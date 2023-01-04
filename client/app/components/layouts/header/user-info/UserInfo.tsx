import { FC } from 'react'
import { IUser } from '@/types/auth.interface'
import { useActions } from '@/hooks/useActions'
import cl from '@/components/layouts/header/user-info/UserInfo.module.scss'
import UserInfoSkeleton from '@/components/layouts/header/user-info/UserInfoSkeleton'

interface UserInfoProps {
	user: IUser
	isLoading: boolean
}

export const UserInfo: FC<UserInfoProps> = ({ user, isLoading }) => {
	const { logout } = useActions()

	const handleLogout = () => {
		logout()
	}

	return (
		<>
			{isLoading ? (
				<UserInfoSkeleton />
			) : (
				<div className={cl.user}>
					<img
						src="https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40"
						alt={user.username}
					/>
					<div className={cl.info}>
						<span>{user.username}</span>
						<button onClick={handleLogout}>Выйти</button>
					</div>
				</div>
			)}
		</>
	)
}
