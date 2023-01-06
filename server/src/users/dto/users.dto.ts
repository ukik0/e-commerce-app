import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class UsersDto {
	@IsNotEmpty()
	@IsString()
	username: string

	@IsNotEmpty()
	@IsString()
	email: string

	@IsNotEmpty()
	@IsNumber()
	password: number

	@IsNotEmpty()
	@IsString()
	avatarUrl: string

}
