import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Comment, CommentDocument } from './schemas/comments.schema'
import { User, UserDocument } from '../users/schemas/users.schema'
import { Product, ProductDocument } from '../products/schemas/products.schema'
import { CommentsDto } from './dto/comments.dto'

@Injectable()
export class CommentsService {
	constructor(
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
		@InjectModel(Product.name) private productModel: Model<ProductDocument>,
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {}

	async createComment(productId: string, userId: string, dto: CommentsDto) {
		const user = await this.userModel.findById(userId)

		if (!dto.text) throw new BadRequestException('Комментарий не может быть пусты')

		const comment = await this.commentModel.create({ text: dto.text, user: user._id, created_at: Date.now() })

		await comment.save()

		await this.productModel.findByIdAndUpdate(productId, {
			$push: {comments: comment}
		})

		return comment

	}
}
