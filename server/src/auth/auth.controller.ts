import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { Auth } from './decorators/auth.decorator'
import { CurrentUser } from '../users/users.decorator'

@Controller('auth')
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UsePipes(new ValidationPipe())
	@Post('login')
	login(@Body() dto: AuthDto) {
		return this.authService.login(dto)
	}

	@UsePipes(new ValidationPipe())
	@Post('register')
	register(@Body() dto: AuthDto) {
		return this.authService.register(dto)
	}


	@Auth()
	@UsePipes(new ValidationPipe())
	@Get('me')
	checkMe(@CurrentUser('id') id: string) {
		return this.authService.checkMe(id)
	}
}
