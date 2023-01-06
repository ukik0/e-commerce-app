import { AiOutlineArrowRight } from 'react-icons/ai'
import cl from './Hero.module.scss'

export const Hero = () => {
	return (
		<div className={cl.hero}>
			<div className="container">
				<h1 className={cl.title}>Распродажа!</h1>
				<p className={cl.description}>
					Являясь всего лишь частью общей картины, представители
					современных социальных резервов набирают популярность среди
					определенных слоев населения, а значит, должны быть
					подвергнуты целой серии независимых исследований.
				</p>
				<button className={cl.btn}>
					Перейти к покупкам!
					<AiOutlineArrowRight className={cl.icon} />
				</button>
			</div>
		</div>
	)
}
