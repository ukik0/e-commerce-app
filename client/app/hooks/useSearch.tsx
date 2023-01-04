import { useDebounce } from '@/hooks/useDebounce'
import { api } from '@/store/api/api'
import { useState } from 'react'

export const useSearch = () => {
	const [searchValue, setSearchValue] = useState<string>('')
	const debouncedSearch = useDebounce(searchValue, 300)

	const { data, isSuccess } = api.useGetProductsByQueryQuery(
		debouncedSearch,
		{
			skip: !debouncedSearch || debouncedSearch.length < 3,
			selectFromResult: ({ data, isSuccess }) => ({
				data: data?.slice(0, 4),
				isSuccess
			})
		}
	)

	return {data, isSuccess, searchValue, setSearchValue}
}
