import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Get()
	@UsePipes(new ValidationPipe())
	getAll() {
		return this.usersService.getAll()
	}

	@Get('/:id')
	@UsePipes(new ValidationPipe())
	getOne(@Param('id') id: String) {
		return this.usersService.getOne(id)
	}
}
