import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { AuthDto } from './dto/auth.dto'
import { User, UserDocument } from '../users/schemas/users.schema'
import { Model } from 'mongoose'
import * as bcrypt from 'bcryptjs'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(User.name) private userModel: Model<UserDocument>,
		private readonly jwtService: JwtService
	) {}

	async register(dto: AuthDto) {
		const isUserRegister = await this.userModel.findOne({
			email: dto.email
		})

		if (isUserRegister)
			throw new BadRequestException('Пользователь уже зарегистрирован')

		const salt = await bcrypt.genSalt(12)
		const hashedPassword = await bcrypt.hash(dto.password, salt)

		const user = await this.userModel.create({
			email: dto.email,
			password: hashedPassword,
			username: dto.username,
			avatarUrl: dto.avatarUrl
		})

		await user.save()

		return {
			// @ts-ignore
			...user._doc,
			accessToken: await this.AccessToken(user.id)
		}
	}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		return {
			// @ts-ignore
			...user._doc,
			accessToken: await this.AccessToken(user.id)
		}
	}

	async checkMe(id: string) {
		const decodedJwt = this.jwtService.decode(id)
		// @ts-ignore
		const user = this.userModel.findById(decodedJwt._id)

		if (!user) throw  new UnauthorizedException('Пользователь не найден!')
		return user
	}

	async validateUser(dto: AuthDto) {
		const user = await this.userModel.findOne({ email: dto.email })

		if (!user) throw new UnauthorizedException('Пользователь не найден!')

		const isValidPassword = await bcrypt.compare(
			dto.password,
			user.password
		)

		if (!isValidPassword)
			throw new UnauthorizedException('Неверный пароль!')

		return user
	}

	async AccessToken(userId: string) {
		const data = { _id: userId }
		return await this.jwtService.signAsync(data, { expiresIn: '31d' })
	}
}
