import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { AuthDto } from './dto/auth.dto'
import { User, UserDocument } from '../users/schemas/users.schema'
import * as bcrypt from 'bcryptjs'
import { Model } from 'mongoose'

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
			password: hashedPassword
		})

		await user.save()

		return {
			user,
			accessToken: await this.AccessToken(user.id)
		}
	}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		return {
			user,
			accessToken: await this.AccessToken(user.id)
		}
	}

	async checkMe(context?) {
		const req = context.switchToHttp().getRequest()
		const user = await this.userModel.findById(req.userId)

		return user
	}

	async validateUser(dto: AuthDto) {
		const user = await this.userModel.findOne({ email: dto.email })

		if (!user) throw new NotFoundException('Пользователь не найден!')

		const isValidPassword = await bcrypt.compare(
			dto.password,
			user.password
		)

		if (!isValidPassword)
			throw new UnauthorizedException('Неверный пароль!')

		return user
	}

	async AccessToken(userId: number) {
		const data = { id: userId }
		return await this.jwtService.signAsync(data, { expiresIn: '31d' })
	}
}
