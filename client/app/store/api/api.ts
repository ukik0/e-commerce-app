import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '@/types/product.interface'
import { TypeRootState } from '@/store/store'

export const api = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:8001/api',
		prepareHeaders: (headers, { getState }) => {
			const token = (getState() as TypeRootState).auth.accessToken

			if (token) {
				headers.set('Authorization', `Bearer ${token}`)
			}

			return headers
		}
	}),
	endpoints: (builder) => ({
		getProductsByQuery: builder.query<IProduct[], string>({
			query: (query) => ({ url: 'products/search', params: { query } })
		}),
	})
})


