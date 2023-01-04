import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useSearch } from '@/hooks/useSearch'
import { Result } from '@/components/layouts/header/search/result/Result'
import cl from './Search.module.scss'

export const Search = () => {
	const {searchValue, setSearchValue, data, isSuccess} = useSearch()

	return (
		<div className={cl.wrapper}>
			<input
				type="text"
				className={cl.input}
				placeholder="Поиск"
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			{searchValue && (
				<AiOutlineClose
					className={cl.close}
					onClick={() => setSearchValue('')}
				/>
			)}
			<BiSearchAlt2 />

			{isSuccess && <Result data={data || []}/>}
		</div>
	)
}
