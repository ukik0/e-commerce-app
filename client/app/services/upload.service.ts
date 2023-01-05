import { axiosInstance } from '@/utils/axios'

export const UploadService = {
	async upload(file: FormData) {
		return axiosInstance.post('media', file)
	}
}