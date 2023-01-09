import { FC, PropsWithChildren } from 'react'
import { TypeComponentsAuthFields } from '@/providers/route.interface'
import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/router'

const CheckRole: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({Component: {isOnlyUser}, children}) => {
	const {user} = useAuth()
	const {pathname, replace} = useRouter()

	if (user) return <>{children}</>


	if (isOnlyUser) pathname !== '/' && replace('/')

	return null

}

export default CheckRole