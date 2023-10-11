import { executeGraphql } from "./_helpers";
import { CategoriesDocument, CategoryDocument } from "@/gql/graphql";

export const getCategories = async () => {
	const { categories } = await executeGraphql(CategoriesDocument, {});

	return categories;
};

export const getCategory = async (id: string) => {
	const { category } = await executeGraphql(CategoryDocument, {
		where: { id },
	});

	return category;
};
