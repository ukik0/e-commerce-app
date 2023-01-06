import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '@/types/product.interface'

interface initialCartState {
	products: IProduct[]
}

const initialState: initialCartState = {
	products: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.products.push(action.payload)
			localStorage.setItem('products', JSON.stringify(state.products))
		},
		removeFromCart: (state, action: PayloadAction<IProduct>) => {
			state.products = state.products.filter((product) => product.size[0] !== action.payload.size[0])
		},
		clearCart: (state) => {
			state.products = []
		}
	},
})

export const CartActions = cartSlice.actions

