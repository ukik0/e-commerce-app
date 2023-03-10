import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import * as mongoose from 'mongoose'
import { HydratedDocument } from 'mongoose'
import { Product } from '../../products/schemas/products.schema'

export type UserDocument = HydratedDocument<User>

@Schema()
export class User {
	@Prop({ type: String, default: 'Пользователь' })
	username: string

	@Prop({ type: String, required: true })
	email: string

	@Prop({ type: String, required: true })
	password: string

	@Prop({ type: String, default: '' })
	avatarUrl: string
}

export const UserSchema = SchemaFactory.createForClass(User)
