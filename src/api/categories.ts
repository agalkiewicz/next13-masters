import { notFound } from "next/navigation";
import { executeGraphql } from "./_helpers";
import { CategoriesDocument, CategoryDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const { categories } = await executeGraphql(CategoriesDocument, {});

	return categories;
};

export const getCategory = async ({
	categoryId,
	page,
	take,
}: {
	categoryId: string;
	page: number;
	take: number;
}) => {
	const skip = (page - 1) * take;

	const {
		category,
		productsConnection: {
			aggregate: { count },
		},
	} = await executeGraphql(CategoryDocument, {
		where: { id: categoryId },
		first: take,
		skip,
	});

	if (!category) {
		notFound();
	}

	const { products, ...rest } = category;
	const mappedProducts = products.map(({ id, name, price, images, description, categories }) => ({
		id,
		name,
		description,
		category: categories[0]?.name || "",
		price,
		image: images[0] && { src: images[0].url, alt: name },
	}));

	return { products: mappedProducts, productsCount: count, ...rest };
};
