import { notFound } from "next/navigation";
import { executeGraphql } from "./_helpers";
import { CollectionDocument, CollectionsDocument } from "@/gql/graphql";
import { type ProductsListItemType } from "@/types";

export const getCollections = async () => {
	const { collections } = await executeGraphql(CollectionsDocument, {});

	return collections;
};

export const getCollection = async (id: string) => {
	const { collection } = await executeGraphql(CollectionDocument, {
		where: { id },
	});

	if (!collection) {
		notFound();
	}

	const { products, ...rest } = collection;
	const mappedProducts = products.map(({ id, name, price, images, description, categories }) => ({
		id,
		name,
		description,
		category: categories[0]?.name || "",
		price,
		image: images[0] && { src: images[0].url, alt: name },
	})) as ProductsListItemType[];

	return { ...rest, products: mappedProducts };
};
