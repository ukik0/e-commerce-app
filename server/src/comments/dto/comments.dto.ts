import { IsNotEmpty, IsString } from 'class-validator'

export class CommentsDto {
	@IsNotEmpty()
	@IsString()
	text: string

	@IsNotEmpty()
	@IsString()
	productId: string

	created_at: number
}
