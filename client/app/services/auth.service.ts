import { axiosInstance } from '@/utils/axios'
import { IUser } from '@/types/auth.interface'

export const AuthService = {
	async register(email: string, password: string, username: string, avatarUrl: string) {
		return axiosInstance.post<IUser>('auth/register', {email, password, username, avatarUrl})
	},
	async login(email: string, password: string) {
		return axiosInstance.post<IUser>('auth/login', {email, password}, )
	},
	async me() {
		return axiosInstance.get<IUser>('auth/me', {
			headers: {
				Authorization: localStorage.getItem('token')
			}
		})
	}
}