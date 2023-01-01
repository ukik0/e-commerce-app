import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ProductsDto {
	@IsNotEmpty()
	@IsString()
	title: string

	@IsNotEmpty()
	@IsString()
	description: string

	@IsNotEmpty()
	@IsString()
	image: string

	@IsNotEmpty()
	@IsNumber()
	price: number

	@IsNotEmpty()
	@IsArray()
	type: string[]

	@IsNotEmpty()
	@IsArray()
	size: number[]

}
