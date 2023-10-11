import { ProductsGetListDocument, type TypedDocumentString } from "@/gql/graphql";
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

const executeGraphql = async <TResult, TVariables>(
	query: TypedDocumentString<TResult, TVariables>,
	variables: TVariables,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw new Error("Missing GRAPHQL_URL env variable");

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({ query, variables }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	type GraphqlResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphqlResponse = (await res.json()) as GraphqlResponse<TResult>;

	if (graphqlResponse.errors) {
		throw new Error("GraphQL error", { cause: graphqlResponse.errors });
	}

	return graphqlResponse.data;
};
