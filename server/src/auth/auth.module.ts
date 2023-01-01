import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'
import { getJWTConfig } from '../config/jwt.config'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from '../users/schemas/users.schema'
import { JwtStrategy } from './strategies/jwt.strategies'

@Module({
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		}),
		MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStrategy]
})
export class AuthModule {}
