import { Module } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CommentsController } from './comments.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Comment, CommentSchema } from './schemas/comments.schema'
import { Product, ProductSchema } from '../products/schemas/products.schema'
import { User, UserSchema } from '../users/schemas/users.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: Comment.name, schema: CommentSchema }]),
		MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]),
		MongooseModule.forFeature([{name: User.name, schema: UserSchema}]),
	],
	controllers: [CommentsController],
	providers: [CommentsService]
})
export class CommentsModule {}
