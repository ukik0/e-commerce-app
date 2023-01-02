import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { CommentsService } from './comments.service'
import { CommentsDto } from './dto/comments.dto'
import { Auth } from '../auth/decorators/auth.decorator'
import { CurrentUser } from '../users/users.decorator'

@Controller('comments')
export class CommentsController {
	constructor(private readonly commentsService: CommentsService) {}

    @Auth()
	@UsePipes(new ValidationPipe())
	@Post()
	createComment(@CurrentUser('id') id: string, @Body() dto: CommentsDto) {
		return this.commentsService.createComment(dto.productId, id, dto)
	}
}
