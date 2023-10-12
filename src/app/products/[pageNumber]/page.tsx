import { PRODUCTS_LIMIT, TOTAL_PRODUCTS, getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams() {
	const pages = Math.ceil(TOTAL_PRODUCTS / PRODUCTS_LIMIT);
	return Array.from({ length: pages }, (_, i) => i + 1).map((pageNumber) => ({
		pageNumber: pageNumber.toString(),
	}));
}

export default async function Products({
	params: { pageNumber },
}: {
	params: { pageNumber: string };
}) {
	const { products, productsCount } = await getProducts({
		page: Number(pageNumber),
		take: PRODUCTS_LIMIT,
	});

	return <ProductList products={products} productsCount={productsCount} />;
}
