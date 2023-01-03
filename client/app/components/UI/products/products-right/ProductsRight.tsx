import { FC, useState } from 'react'
import { IProduct } from '@/types/product.interface'
import { AiOutlineSend } from 'react-icons/ai'
import cl from './ProductsRight.module.scss'

//TODO: FIX COMPONENT

export const ProductsRight: FC<{product: IProduct}> = ({product}) => {
	const [value, setValue] = useState<string>('')

	return (
		<div className={cl.wrapper}>
			<h4 className={cl.title}>
				Комментарии к продукту:
			</h4>

			<ul className={cl.list}>
				<li className={cl.item}>
					<img src='https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40' alt='user' />
					<div className={cl.content}>
						<span className={cl.name}>Ralph Edwards</span>
						<p className={cl.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus et fuga laboriosam magnam magni, possimus quibusdam ratione. Atque ducimus ipsam laboriosam molestiae sunt. Accusamus et eveniet ratione soluta unde!
						</p>
					</div>
					<time className={cl.time}>5 min ago</time>
				</li>

				<li className={cl.item}>
					<img src='https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40' alt='user' />
					<div className={cl.content}>
						<span className={cl.name}>Ralph Edwards</span>
						<p className={cl.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus et fuga laboriosam magnam magni, possimus quibusdam ratione. Atque ducimus ipsam laboriosam molestiae sunt. Accusamus et eveniet ratione soluta unde!
						</p>
					</div>
					<time className={cl.time}>5 min ago</time>
				</li>

				<li className={cl.item}>
					<img src='https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40' alt='user' />
					<div className={cl.content}>
						<span className={cl.name}>Ralph Edwards</span>
						<p className={cl.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus et fuga laboriosam magnam magni, possimus quibusdam ratione. Atque ducimus ipsam laboriosam molestiae sunt. Accusamus et eveniet ratione soluta unde!
						</p>
					</div>
					<time className={cl.time}>5 min ago</time>
				</li>

				<li className={cl.item}>
					<img src='https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40' alt='user' />
					<div className={cl.content}>
						<span className={cl.name}>Ralph Edwards</span>
						<p className={cl.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus et fuga laboriosam magnam magni, possimus quibusdam ratione. Atque ducimus ipsam laboriosam molestiae sunt. Accusamus et eveniet ratione soluta unde!
						</p>
					</div>
					<time className={cl.time}>5 min ago</time>
				</li>

				<li className={cl.item}>
					<img src='https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40' alt='user' />
					<div className={cl.content}>
						<span className={cl.name}>Ralph Edwards</span>
						<p className={cl.description}>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi delectus et fuga laboriosam magnam magni, possimus quibusdam ratione. Atque ducimus ipsam laboriosam molestiae sunt. Accusamus et eveniet ratione soluta unde!
						</p>
					</div>
					<time className={cl.time}>5 min ago</time>
				</li>

			</ul>

			<div className={cl[`input__wrapper`]}>
				<input value={value} onChange={(e) => setValue(e.target.value)} type='text' maxLength={100} className={cl.input} placeholder='Ваше сообщение'/>
				<AiOutlineSend className={cl.icon}/>
				<span className={cl.control}>{value.length} / 100</span>
			</div>
		</div>

	)
}