import { FC, useState } from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import { CommentItem } from '@/components/UI/comment-item/CommentItem'
import { api } from '@/store/api/api'
import relativeTime from 'dayjs/plugin/relativeTime'
import dayjs from 'dayjs'
import cl from './ProductsRight.module.scss'
import { useAuth } from '@/hooks/useAuth'
import { toastr } from 'react-redux-toastr'

dayjs.extend(relativeTime)

export const ProductsRight: FC<{ productId: string }> = ({ productId }) => {
	const [value, setValue] = useState<string>('')
	const {user} = useAuth()

	const {data: comments} = api.useGetProductQuery(productId)
	const [comment, {isLoading: isCommentsLoading}] = api.useCreateCommentMutation()

	const handleComment = () => {
		comment({productId, text: value, created_at: Date.now()}).unwrap()
			.then(() => setValue(''))
			.catch((e) => toastr.error('Комментарий', 'необходимо авторизоваться'))
	}

	return (
		<div className={cl.wrapper}>
			<h4 className={cl.title}>Комментарии к продукту:</h4>

			<ul className={cl.list}>
				{comments?.map((comment) => <CommentItem key={comment._id} comment={comment}/>)}
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
				<button disabled={isCommentsLoading} onClick={handleComment}>
					<AiOutlineSend className={cl.icon}/>
				</button>
				<span className={cl.control}>{value.length} / 100</span>
			</div>
		</div>
	)
}
