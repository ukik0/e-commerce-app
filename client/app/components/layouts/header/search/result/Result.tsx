import { FC } from 'react'
import { IProduct } from '@/types/product.interface'
import { ResultItem } from '@/components/layouts/header/search/result/result-item/ResultItem'
import cl from '@/components/layouts/header/search/result/Result.module.scss'

interface ResultProps {
	data: IProduct[]
}

export const Result: FC<ResultProps> = ({data}) => {

	return (
		<>
			<ul className={cl.result}>
				{data?.length ? (
					data.map((product) => (
						<ResultItem product={product} key={product._id}/>
					))
				) : (
					<li className="text-white">Товаров не найдено</li>
				)}
			</ul>


		</>
	)
}