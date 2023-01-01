import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
	imports: [
		MongooseModule.forRoot(`mongodb+srv://ukik0:1m1mmortalCekac@cluster0.cnml8oe.mongodb.net/e-commerce-nest-app?retryWrites=true&w=majority`),
		ProductsModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
