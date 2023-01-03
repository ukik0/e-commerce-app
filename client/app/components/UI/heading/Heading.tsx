import { FC } from 'react'
import cl from './Heading.module.scss'

export const Heading: FC<{title: string}> = ({title}) => {
	return (
		<h2 className={cl.title}>
			{title}
		</h2>
	)
}