import { IUser } from '@/types/auth.interface'
import { IProduct } from '@/types/product.interface'

export interface ICommentResponse {
	_id: string;
	created_at: Date;
	text: string;
	user: IUser;
	__v: number;
	comments: IComment[]
}

export interface IComment {
	_id: string;
	created_at: Date;
	text: string;
	user: IUser;
	__v: number;
}

export interface ICommentCreate {
	productId: string
	text: string
	created_at: number
}

export interface IResponse {
	product: IProduct
	comments: IComment[]
}