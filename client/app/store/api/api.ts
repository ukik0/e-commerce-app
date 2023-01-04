import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '@/types/product.interface'
import { TypeRootState } from '@/store/store'
import { IComment, ICommentCreate, ICommentResponse, IResponse } from '@/types/comments.interface'

export const api = createApi({
	reducerPath: 'api',
	tagTypes: ['Comments'],
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
		getProduct: builder.query<IComment[], string>({
			query: (id) => ({ url: `products/${id}` }),
			transformResponse: (response: IResponse) => response.comments,
			providesTags: () => [{ type: 'Comments' }]
		}),
		createComment: builder.mutation<ICommentResponse, ICommentCreate>({
			query: (body) => ({
				url: `comments`,
				method: 'POST',
				body: body
			}),
			invalidatesTags: () => [{ type: 'Comments' }]
		})
	})
})
