import { PRODUCTS_LIMIT, getProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateStaticParams({ params: { page } }: { params: { page: string } }) {
	const { productsCount } = await getProducts({
		page: Number(page),
		take: PRODUCTS_LIMIT,
	});
	const pages = Math.ceil(productsCount / PRODUCTS_LIMIT);
	return Array.from({ length: pages }, (_, i) => i + 1).map((page) => ({
		page: page.toString(),
	}));
}

export default async function Products({ params: { page } }: { params: { page: string } }) {
	const { products, productsCount } = await getProducts({
		page: Number(page),
		take: PRODUCTS_LIMIT,
	});

	return <ProductList products={products} productsCount={productsCount} />;
}
