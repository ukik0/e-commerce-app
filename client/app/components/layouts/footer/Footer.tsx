import Image from 'next/image'
import Link from 'next/link'
import { FooterData } from '@/components/layouts/footer/Footer.data'
import cl from './Footer.module.scss'

export const Footer = () => {
	return (
		<div className={cl.wrapper}>
			<div className="container">
				<footer className={cl.footer}>
					<Image src={'/img/logo.png'} alt={''} width={90} height={90} className={cl.logo} priority/>
					<ul className={cl.list}>
						{FooterData.map((item) => (
							<Link href={item.href} key={item.title}>
								<li className={cl.item}>{item.title}</li>
							</Link>
						))}
					</ul>
					<span className={cl.copyright}>© 2023 DUNKIN</span>
				</footer>
			</div>
		</div>
	)
}
