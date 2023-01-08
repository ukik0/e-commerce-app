import { axiosInstance } from '@/utils/axios'

export const UploadService = {
	async upload(file: FormData) {
		return axiosInstance.post<{url: string, name: string}>('media', file)
	}
}