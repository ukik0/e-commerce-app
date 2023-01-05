import { Middleware, MiddlewareAPI } from 'redux'
import { isRejectedWithValue } from '@reduxjs/toolkit'
import { toastError } from '@/utils/api.utils'

export const ErrorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
	if (isRejectedWithValue(action)) {
		toastError(action.error, 'Непредвиденная ошибка')
	}

	return next(action)
}

