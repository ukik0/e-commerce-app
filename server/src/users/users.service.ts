import { BadRequestException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './schemas/users.schema'
import { Model } from 'mongoose'

//TODO: протестировать после создания пользователя
@Injectable()
export class UsersService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {}

	async getOne(id: String): Promise<User> {
		const user = await this.userModel.findById(id)

		if (!user) throw new BadRequestException('Пользователь не найден', 203)
		return user
	}

	async getAll(): Promise<User[]> {
		const users = await this.userModel.find()
		return users
	}
}
