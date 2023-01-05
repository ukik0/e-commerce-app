import { FC } from 'react'
import { IUser } from '@/types/auth.interface'
import { useActions } from '@/hooks/useActions'
import UserInfoSkeleton from '@/components/layouts/header/user-info/UserInfoSkeleton'
import cl from '@/components/layouts/header/user-info/UserInfo.module.scss'

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
						src={`http://localhost:8001${user?.avatarUrl}`}
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
