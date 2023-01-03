import axios from 'axios'

export const API_URL = `${process.env.REACT_APP_URL}/api`
export const $URL = `${process.env.REACT_APP_URL}`

export const axiosInstance = axios.create({
	baseURL: API_URL,
})
