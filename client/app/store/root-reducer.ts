import { combineReducers } from 'redux'
import { reducer as toastrReducer } from 'react-redux-toastr'
import { authSlice } from '@/store/auth/auth.slice'
import { modalSlice } from '@/store/modal/modal.slice'
import { cartSlice } from '@/store/cart/cart.slice'
import { api } from '@/store/api/api'

export const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authSlice.reducer,
	modal: modalSlice.reducer,
	cart: cartSlice.reducer,
	toastr: toastrReducer
})