import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Product, ProductDocument } from './schemas/products.schema'
import { ProductsDto } from './dto/products.dto'
import { Model } from 'mongoose'
import { Comment, CommentDocument } from '../comments/schemas/comments.schema'

@Injectable()
export class ProductsService {
	constructor(
		@InjectModel(Product.name) private productModel: Model<ProductDocument>,
		@InjectModel(Comment.name) private commentModel: Model<CommentDocument>
	) {}

	async getAll(): Promise<Product[]> {
		const products = await this.productModel.find()
		return products
	}

	async search(query: string): Promise<Product[]> {
		const products = await this.productModel.find({
			title: { $regex: new RegExp(query, 'i') }
		})
		return products
	}

	async getOne(id: String) {
		const product = await this.productModel.findById(id)
		const comments = await Promise.all(
			product.comments.map((comment) =>
				this.commentModel.findById(comment).populate('user')
			)
		)

		if (!product) throw new HttpException('Товар не найден', 202)
		return { product, comments }
	}

	async create(dto: ProductsDto): Promise<Product> {
		const product = await this.productModel.create({ ...dto })
		return product
	}

	async update(id: String, dto: ProductsDto): Promise<Product> {
		const product = await this.getOne(id)
		if (!product) throw new HttpException('Товар не найден', 202)

		const updatedProduct = await this.productModel.findByIdAndUpdate(
			id,
			{
				$set: dto
			},
			{ new: true }
		)
		return updatedProduct
	}

	async delete(id: String): Promise<Product> {
		const product = await this.productModel.findByIdAndDelete(id)
		return product
	}
}
