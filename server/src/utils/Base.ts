import { Prop } from '@nestjs/mongoose'

export class Base {

	@Prop({type: Date, default: Date.now()})
	created_at: Date

}