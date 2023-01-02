import { AiOutlineClose } from 'react-icons/ai'
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'
import cl from './Search.module.scss'

export const Search = () => {
	const [value, setValue] = useState<string>()

	return (
		<div className={cl.wrapper}>
			<input type='text' className={cl.input} placeholder='Поиск' value={value} onChange={(e) => setValue(e.target.value)} />
			{value && <AiOutlineClose className={cl.close} onClick={() => setValue('')}/>}
			<BiSearchAlt2/>
		</div>
	)
}