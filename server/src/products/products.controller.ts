import { Body, Controller, Delete, Get, Param, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { ProductsService } from './products.service'
import { ProductsDto } from './dto/products.dto'

@Controller('products')
export class ProductsController {
	constructor(private readonly productsService: ProductsService) {}

	@Get()
	@UsePipes(new ValidationPipe())
	getAll(
		@Query('category') category: number,
		@Query('sortType') sortType: string,
		@Query('sortBy') sortBy: number
	) {
		return this.productsService.getAll(category, sortType, sortBy)
	}

	@Get('search')
	@UsePipes(new ValidationPipe())
	search(@Query('query') query: string) {
		return this.productsService.search(query)
	}

	@UsePipes(new ValidationPipe())
	@Get('/:id')
	getOne(@Param('id') id: String) {
		return this.productsService.getOne(id)
	}

	@Post()
	@UsePipes(new ValidationPipe())
	create(@Body() dto: ProductsDto) {
		return this.productsService.create(dto)
	}

	@Put('/:id')
	@UsePipes(new ValidationPipe())
	update(@Body() dto: ProductsDto, @Param('id') id: String) {
		return this.productsService.update(id, dto)
	}

	@Delete('/:id')
	@UsePipes(new ValidationPipe())
	delete(@Param('id') id: String) {
		return this.productsService.delete(id)
	}
}
