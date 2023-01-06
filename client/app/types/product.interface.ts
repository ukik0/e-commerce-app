export interface IProduct {
	_id: string;
	title: string;
	description: string;
	image: string;
	price: number;
	type: string[];
	size: string[];
	comments: string[];
	category?: number
}