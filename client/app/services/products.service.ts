import { axiosInstance } from '@/utils/axios'
import { IProduct } from '@/types/product.interface'

export const ProductsService = {
	async getProducts(category: number, sortType: string, sortBy: number) {
		return axiosInstance.get<IProduct[]>(`/products?category=${category}&sortType=${sortType}&sortBy=${sortBy}`)
	},
	async createProduct({ ...rest }) {
		return axiosInstance.post<IProduct>('/products', {...rest})
	}
}