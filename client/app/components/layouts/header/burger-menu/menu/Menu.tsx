import { FC } from 'react'
import { IMenuData } from '@/components/layouts/header/burger-menu/menu/Menu.interface'
import Link from 'next/link'
import cn from 'classnames'
import cl from './Menu.module.scss'
import { useRouter } from 'next/router'

interface IMenu {
	menu: IMenuData[]
	open: boolean
}

export const Menu: FC<IMenu> = ({ menu, open = false }) => {
	const { asPath } = useRouter()

	return (
		<ul
			className={cn(cl.list, {
				[cl.active]: open
			})}
		>
			{menu.map((item) => {
				const activePath = asPath === item.href

				return (
					<li
						key={item.title}
						className={cn({
							[cl.activeItem]: activePath
						})}
					>
						<Link href={item.href}>
							{<item.icon />}
							<span>{item.title}</span>
						</Link>
					</li>
				)
			})}
		</ul>
	)
}
