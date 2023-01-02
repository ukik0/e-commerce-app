import Image from 'next/image'
import cl from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={cl.wrapper}>
			<div className="container">
				<footer className={cl.footer}>
					<Image src={'/img/logo.png'} alt={''} width={90} height={90} className={cl.logo} priority/>
					<ul className={cl.list}>
						<li className={cl.item}>Главгая</li>
						<li className={cl.item}>Фильмы</li>
						<li className={cl.item}>Сериалы</li>
						<li className={cl.item}>Корзина</li>
					</ul>
					<span className={cl.copyright}>© 2023 DUNKIN</span>
				</footer>
			</div>
		</div>
	)
}
