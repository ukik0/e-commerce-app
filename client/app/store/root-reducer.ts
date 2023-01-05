import { combineReducers } from 'redux'
import { authSlice } from '@/store/auth/auth.slice'
import { modalSlice } from '@/store/modal/modal.slice'
import { api } from '@/store/api/api'
import { cartSlice } from '@/store/cart/cart.slice'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	modal: modalSlice.reducer,
	cart: cartSlice.reducer
})