import cl from './EmptyCart.module.scss'
import { useRouter } from 'next/router'

export const EmptyCart = () => {
	const router = useRouter()

	return (
		<div className={cl.empty}>
			<h6 className={cl[`empty__title`]}>Корзина пустая 😕</h6>

			<p className={cl[`empty__description`]}>
				Вероятней всего, вы не заказывали товар. Для того, чтобы
				заказать товар, перейди на главную страницу.
			</p>

			<button onClick={() => router.push('/')} className={cl[`empty__btn`]}>Вернуться назад</button>
		</div>
	)
}
