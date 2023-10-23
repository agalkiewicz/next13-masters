import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCategory } from "@/api/categories";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_LIMIT } from "@/api/products";

export async function generateMetadata({
	params: { id, page },
}: {
	params: { id: string; page: number };
}): Promise<Metadata> {
	const category = await getCategory({
		categoryId: id,
		page: page,
		take: PRODUCTS_LIMIT,
	});

	return {
		title: category.name,
	};
}

export default async function CategoryProducts({
	params: { id, page },
}: {
	params: { id: string; page: number };
}) {
	const category = await getCategory({
		categoryId: id,
		page: page,
		take: PRODUCTS_LIMIT,
	});

	if (!category) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-6 text-2xl font-semibold">{category.name}</h1>
			<ProductList products={category.products} productsCount={category.productsCount} />
		</>
	);
}
