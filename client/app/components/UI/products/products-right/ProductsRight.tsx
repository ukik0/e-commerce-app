import { FC, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { api } from '@/store/api/api'
import cl from './ProductsRight.module.scss'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

//TODO: FIX COMPONENT

export const ProductsRight: FC<{ productId: string }> = ({ productId }) => {
	const [value, setValue] = useState<string>('')

	const {data, isLoading, isError} = api.useGetProductQuery(productId)
	const [comment, {isLoading: isCommentsLoading}] = api.useCreateCommentMutation()

	const handleComment = () => {
		comment({productId: productId, text: value, created_at: Date.now()})
		setValue('')
	}

	return (
		<div className={cl.wrapper}>
			<h4 className={cl.title}>Комментарии к продукту:</h4>

			<ul className={cl.list}>
				{data?.map((comment) => (
					<li className={cl.item} key={comment._id}>
						<img
							src="https://cdn.dribbble.com/users/744746/avatars/normal/1c0a74119b518f35b2cdecefca9558b2.png?1668089400&compress=1&resize=40x40"
							alt="user"
						/>
						<div className={cl.content}>
							<span className={cl.name}>{comment.user?.username}</span>
							<p className={cl.description}>
								{comment.text}
							</p>
						</div>
						<time className={cl.time}>{dayjs(comment.created_at).fromNow()}</time>
					</li>
				))}


			</ul>

			<div className={cl[`input__wrapper`]}>
				<input
					value={value}
					onChange={(e) => setValue(e.target.value)}
					type="text"
					maxLength={100}
					className={cl.input}
					placeholder="Ваше сообщение"
				/>
				<AiOutlineSend className={cl.icon} onClick={handleComment}/>
				<span className={cl.control}>{value.length} / 100</span>
			</div>
		</div>
	)
}
