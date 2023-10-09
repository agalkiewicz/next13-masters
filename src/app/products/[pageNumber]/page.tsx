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
	const products = await getProducts({ page: Number(pageNumber), limit: PRODUCTS_LIMIT });

	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}