import { createAsyncThunk } from '@reduxjs/toolkit'
import { IAuth } from '@/types/auth.interface'
import { AuthService } from '@/services/auth.service'

export const register = createAsyncThunk<any, IAuth>(
	'auth/register',
	async ({ email, password, username }, thunkAPI) => {
		try {
			const { data } = await AuthService.register(email, password, username!)
			if (data.accessToken) {
				localStorage.setItem('token', data.accessToken)
			}

			return data
		} catch (e) {
			thunkAPI.rejectWithValue(e)
		}
	}
)

export const login = createAsyncThunk<any, IAuth>(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const { data } = await AuthService.login(email, password)

			if (data.accessToken) {
				localStorage.setItem('token', data.accessToken)
			}
			return data
		} catch (e) {
			thunkAPI.rejectWithValue(e)
		}
	}
)

export const getMe = createAsyncThunk<any, any>('auth/me', async () => {
	const { data } = await AuthService.me()
	return data
})

export const logout = createAsyncThunk('auth/logout', async () => {
	return {}
})
