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

const PRODUCTS_ENDPOINT = "https://naszsklep-api.vercel.app/api/products";

export const PRODUCTS_LIMIT = 20;
export const TOTAL_PRODUCTS = 200;

export const getProducts = async ({ page, limit }: { page: number; limit: number }) => {
	const offset = (page - 1) * limit;
	const response = await fetch(`${PRODUCTS_ENDPOINT}?take=${limit}&offset=${offset}`);
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
	const response = await fetch(`${PRODUCTS_ENDPOINT}/${productId}`);
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
