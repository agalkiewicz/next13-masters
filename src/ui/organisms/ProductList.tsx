import { type ProductsListItemType } from "@/types";
import { ProductListItem } from "@/ui/molecules/ProductListItem";

export type ProductListProps = {
	products: ProductsListItemType[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul
			className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => (
				<ProductListItem key={product.id} product={product} />
			))}
		</ul>
	);
};
