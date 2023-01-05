import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/store/api/api'
import { rootReducer } from '@/store/root-reducer'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { ErrorMiddleware } from '@/store/middlewares/error.middleware'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(ErrorMiddleware).concat(api.middleware)
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>