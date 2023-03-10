import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ProductsModule } from './products/products.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getMongoConfig } from './config/mongo.config'
import { MediaModule } from './media/media.module'
import { CommentsModule } from './comments/comments.module';

@Module({
	imports: [
		MongooseModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getMongoConfig
		}),
		ConfigModule.forRoot(),
		ProductsModule,
		UsersModule,
		AuthModule,
		MediaModule,
		CommentsModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
