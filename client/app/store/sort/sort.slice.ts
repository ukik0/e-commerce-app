import { createSlice } from '@reduxjs/toolkit'

const initialState: {sort: number} = {
	sort: 1
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState: initialState,
	reducers: {
		setSort: (state, action) => {
			state.sort = action.payload
		}
	},
})

export const SortActions = sortSlice.actions


