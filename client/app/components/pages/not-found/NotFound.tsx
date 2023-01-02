import Link from 'next/link'
import cl from './NofFound.module.scss'

export const NotFound = () => {

	return (
		<div className="container">
			<div className={cl.wrapper}>
				<h1 className={cl.title}>404. Страница не найдена</h1>
				<p className={cl.desc}>
					Возможно, она была перемещена, или вы просто неверно указали
					адрес страницы.
				</p>
				<Link href={'/'} className={cl.button}>Вернуться назад</Link>
			</div>
		</div>
	)
}
