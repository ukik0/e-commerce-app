import { axiosInstance } from '@/utils/axios'
import { IUser } from '@/types/auth.interface'

export const AuthService = {
	async register(email: string, password: string, username: string) {
		return axiosInstance.post<IUser>('auth/register', {email, password, username})
	},
	async login(email: string, password: string) {
		return axiosInstance.post<IUser>('auth/login', {email, password}, )
	},
	async me() {
		return axiosInstance.get<IUser>('auth/me', {
			headers: {
				// @ts-ignore
				Authorization: localStorage.getItem('token')
			}
		})
	}
}