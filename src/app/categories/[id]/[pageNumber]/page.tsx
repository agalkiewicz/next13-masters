import { notFound } from "next/navigation";
import { getCategory } from "@/api/categories";
import { ProductList } from "@/ui/organisms/ProductList";
import { PRODUCTS_LIMIT } from "@/api/products";

export default async function CategoryProducts({
	params: { id, pageNumber },
}: {
	params: { id: string; pageNumber: number };
}) {
	const category = await getCategory({
		categoryId: id,
		page: pageNumber,
		take: PRODUCTS_LIMIT,
	});

	if (!category) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-6 text-lg">{category.name}</h1>
			<ProductList products={category.products} productsCount={category.productsCount} />
		</>
	);
}
