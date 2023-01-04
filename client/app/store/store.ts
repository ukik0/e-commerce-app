import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/store/api/api'
import { rootReducer } from '@/store/root-reducer'

export const store =configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(api.middleware),
})