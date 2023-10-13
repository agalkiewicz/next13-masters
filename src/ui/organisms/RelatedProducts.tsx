import { Suspense } from "react";
import { ProductList } from "./ProductList";
import { getRelatedProducts } from "@/api/products";

export const RelatedProducts = async ({
	categoryName,
	excludedId,
}: {
	categoryName: string;
	excludedId: string;
}) => {
	const products = await getRelatedProducts({ categoryName, excludedId });

	return (
		<Suspense>
			<h2 className="mb-6 text-base">Related Products</h2>
			<div data-testid="related-products">
				<ProductList products={products} />
			</div>
		</Suspense>
	);
};
