import { notFound } from "next/navigation";
import { executeGraphql } from "./_helpers";
import { ProductsGetListDocument, ProductGetByIdDocument } from "@/gql/graphql";
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

export const PRODUCTS_LIMIT = 20;
export const TOTAL_PRODUCTS = 200;

// TODO: handle pagination
export const getProducts = async ({
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	limit = PRODUCTS_LIMIT,
}: {
	page: number;
	limit?: number;
}) => {
	const graphqlResponse = await executeGraphql(ProductsGetListDocument, { limit });

	return graphqlResponse.products.map(({ id, name, price, images, description, categories }) => ({
		id,
		name,
		description,
		category: categories[0]?.name || "",
		price,
		image: images[0] && { src: images[0].url, alt: name },
	})) as ProductsListItemType[];
};

export const getProduct = async (productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, { id: productId });

	if (!product) {
		notFound();
	}

	const { id, name, price, images, description, categories } = product;

	return {
		id,
		name,
		description,
		category: categories[0]?.name || "",
		price,
		image: images[0] && { src: images[0].url, alt: name },
	} as ProductsListItemType;
};
