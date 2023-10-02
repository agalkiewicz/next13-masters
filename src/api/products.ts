import { type ProductListItemType } from "@/types";

type Rating = {
	rate: number;
	count: number;
};

export type ProductsListItemDto = {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	rating: Rating;
	image: string;
	longDescription: string;
};

export const getProducts = async () => {
	const response = await fetch("https://naszsklep-api.vercel.app/api/products?take=20");
	const products = (await response.json()) as ProductsListItemDto[];

	return products.map(({ id, title, price, image }) => ({
		id: id,
		name: title,
		price: price,
		image: { src: image, alt: title },
	})) as ProductListItemType[];
};
