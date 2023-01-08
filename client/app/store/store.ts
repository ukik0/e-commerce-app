import { configureStore } from '@reduxjs/toolkit'
import { api } from '@/store/api/api'
import { rootReducer } from '@/store/root-reducer'
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
	key: 'root',
	storage,
	whiteList: ['cart'],
	blacklist: ['modal', 'api', 'user', 'sort', 'auth', 'toastr']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}).concat(api.middleware)
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>