import { createSlice } from '@reduxjs/toolkit'

const initialState: {isOpen: boolean} = {
	isOpen: false
}

export const modalSlice = createSlice({
	name: 'modal',
	initialState: initialState,
	reducers: {
		setOpen: (state) => {
			state.isOpen = true
		},
		setClose: (state) => {
			state.isOpen = false
		}
	},
})

export const ModalActions = modalSlice.actions


