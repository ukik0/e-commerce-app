import { Module } from '@nestjs/common'
import { UsersService } from './users.service'
import { UsersController } from './users.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schemas/users.schema'
import { Product, ProductSchema } from '../products/schemas/products.schema'

@Module({
	imports: [
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
		MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])
	],
	controllers: [UsersController],
	providers: [UsersService]
})
export class UsersModule {}
