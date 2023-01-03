import { axiosInstance } from '@/utils/axios'
import { IProduct } from '@/types/product.interface'

export const ProductsService = {
	async getProducts() {
		return axiosInstance.get<IProduct[]>('/products')
	}
}