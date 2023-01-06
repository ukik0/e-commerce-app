import { createSlice } from '@reduxjs/toolkit'

const initialState: {sort: number, category: string} = {
	sort: 1,
	category: 'price'
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState: initialState,
	reducers: {
		setSort: (state, action) => {
			state.sort = action.payload
		},
		setCategory: (state, action) => {
			state.category = action.payload
		}
	},
})

export const SortActions = sortSlice.actions


