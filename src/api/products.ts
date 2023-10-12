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

export const PRODUCTS_LIMIT = 4;
export const TOTAL_PRODUCTS = 200;

export const getProducts = async ({ page, take }: { page: number; take: number }) => {
	const skip = (page - 1) * take;

	const {
		products,
		productsConnection: {
			aggregate: { count: productsCount },
		},
	} = await executeGraphql(ProductsGetListDocument, { skip, first: take });

	const mappedProducts = products.map(({ id, name, price, images, description, categories }) => ({
		id,
		name,
		description,
		category: categories[0]?.name || "",
		price,
		image: images[0] && { src: images[0].url, alt: name },
	})) as ProductsListItemType[];

	return { products: mappedProducts, productsCount };
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
