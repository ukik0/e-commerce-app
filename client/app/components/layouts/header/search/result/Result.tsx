import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import cl from '@/components/layouts/header/search/result/Result.module.scss'

interface ResultProps {
	data: IProduct[]
}

export const Result: FC<ResultProps> = ({data}) => {
	return (
		<ul className={cl.result}>
			{data?.length ? (
				data.map((product) => (
					<li key={product._id} className={cl.item}>
						<img src={`http://localhost:8001${product.image}`} width={40} height={40} alt={product.title} className={cl.img}/>

						<div className={cl.info}>
							<h6 className={cl.title}>{product.title}</h6>
							<p className={cl.description}>{product.description}</p>
						</div>
					</li>
				))
			) : (
				<li className="text-white">Товаров не найдено</li>
			)}
		</ul>
	)
}