import { searchProducts } from "@/api/products";
import { ProductList } from "@/ui/organisms/ProductList";

export default async function SearchedProducts({
	searchParams,
}: {
	searchParams?: { [key: string]: string | string[] | undefined };
}) {
	const query = searchParams?.query as string;

	const products = await searchProducts(query);

	return (
		<>
			<h1 className="mb-6 text-lg">Search results for &quot;{query}&quot;</h1>
			<ProductList products={products} />
		</>
	);
}
