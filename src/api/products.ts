import { type ProductsListItemType } from "@/types";

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

const ENDPOINT = "https://naszsklep-api.vercel.app/api/products";

export const getProducts = async () => {
	const response = await fetch(`${ENDPOINT}?take=20`);
	const products = (await response.json()) as ProductsListItemDto[];

	return products.map(({ id, title, price, image, description, category }) => ({
		id,
		name: title,
		description,
		category,
		price,
		image: { src: image, alt: title },
	})) as ProductsListItemType[];
};

export const getProduct = async (productId: string) => {
	const response = await fetch(`${ENDPOINT}/${productId}`);
	const { id, title, price, image, description, category } =
		(await response.json()) as ProductsListItemDto;

	return {
		id,
		name: title,
		description,
		category,
		price,
		image: { src: image, alt: title },
	} as ProductsListItemType;
};
