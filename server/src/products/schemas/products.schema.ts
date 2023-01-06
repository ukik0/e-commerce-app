import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { Comment } from '../../comments/schemas/comments.schema'

export type ProductDocument = HydratedDocument<Product>

@Schema()
export class Product {
	@Prop({ type: String, required: true, unique: true })
	title: string

	@Prop({ type: String, required: true })
	description: string

	@Prop({ type: String, default: ''})
	image: string

	@Prop({ type: Number, required: true })
	price: number

	@Prop({type: [{type: String, default: []}]})
	type: string[]

	@Prop({type: [{type: String, default: []}]})
	size: string[]

	@Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
	comments: Comment[]

	@Prop({ type: Number, default: 0, required: true })
	category: number
}

export const ProductSchema = SchemaFactory.createForClass(Product)
