import { createSlice } from '@reduxjs/toolkit'

const initialState: {sortBy: number, sortType: string} = {
	sortBy: 1,
	sortType: 'price'
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState: initialState,
	reducers: {
		setSort: (state, action) => {
			state.sortBy = action.payload
		},
		setCategory: (state, action) => {
			state.sortType = action.payload
		}
	},
})

export const SortActions = sortSlice.actions


