import axios from 'axios'

export const API_URL = `http://localhost:8001/api`

export const axiosInstance = axios.create({
	baseURL: API_URL,
})

axios.interceptors.request.use((config: any) => {
	config.headers.Authorization = localStorage.getItem('token')
	return config
})

