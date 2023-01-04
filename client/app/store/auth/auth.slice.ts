import { createSlice } from '@reduxjs/toolkit'
import { IAuthState } from '@/types/auth.interface'
import { getMe, login, logout, register } from '@/store/auth/auth.actions'

const initialState: IAuthState = {
	user: null,
	accessToken: typeof window !== "undefined" ? window.localStorage.getItem('token') : '',
	isLoading: false
}

export const authSlice = createSlice({
	name: 'auth',
	initialState: initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
				state.accessToken = action.payload.accessToken
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
				state.accessToken = action.payload.accessToken
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(getMe.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload
			})
			.addCase(getMe.rejected, (state, action) => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})
			.addCase(getMe.pending, (state, action) => {
				state.isLoading = true
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false
				state.user = null
				state.accessToken = ''
			})

	}
})


