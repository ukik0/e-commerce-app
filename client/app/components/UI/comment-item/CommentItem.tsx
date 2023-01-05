import { FC } from 'react'
import { IComment } from '@/types/comments.interface'
import dayjs from 'dayjs'
import cl from './CommentItem.module.scss'

interface CommentItemProps {
	comment: IComment
}

export const CommentItem: FC<CommentItemProps> = ({comment}) => {
	return (
		<li className={cl.item} key={comment._id}>
			<img
				src={`http://localhost:8001${comment.user?.avatarUrl}`}
				alt="user"
			/>
			<div className={cl.content}>
				<span className={cl.name}>{comment.user?.username}</span>
				<p className={cl.description}>{comment.text}</p>
			</div>
			<time className={cl.time}>
				{dayjs(comment.created_at).fromNow()}
			</time>
		</li>
	)
}
