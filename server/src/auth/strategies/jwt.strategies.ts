import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { InjectModel } from '@nestjs/mongoose'
import { ConfigService } from '@nestjs/config'
import { User, UserDocument } from '../../users/schemas/users.schema'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { Model } from 'mongoose'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		@InjectModel(User.name) private userModel: Model<UserDocument>
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: configService.get('JWT_SECRET')
		})
	}

	async validate({ _id }: Pick<UserDocument, '_id'>) {
		return this.userModel.findById({ _id })
	}
}
