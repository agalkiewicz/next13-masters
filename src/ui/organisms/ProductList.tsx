import { Pagination } from "../molecules/Pagination";
import { PRODUCTS_LIMIT } from "@/api/products";
import { type ProductsListItemType } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export type ProductListProps = {
	products: ProductsListItemType[];
	productsCount: number;
};

export const ProductList = ({ products, productsCount }: ProductListProps) => {
	return (
		<div>
			<ul
				className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
				data-testid="products-list"
			>
				{products.map((product) => (
					<ProductListItem key={product.id} product={product} />
				))}
			</ul>
			<div className="mt-24 flex justify-center">
				<Pagination elementsPerPage={PRODUCTS_LIMIT} totalElements={productsCount} />
			</div>
		</div>
	);
};
