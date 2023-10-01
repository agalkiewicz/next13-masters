import { type ProductListItemType } from "@/types";
import { ProductList } from "@/ui/organisms/ProductList";

const products: ProductListItemType[] = [
	{
		id: "1",
		name: "Product 1",
		price: 10000,
		image: {
			src: "/images/tshirt_1.jpeg",
			alt: "Product 1",
		},
	},
	{
		id: "2",
		name: "Product 2",
		price: 20000,
		image: {
			src: "/images/tshirt_2.jpeg",
			alt: "Product 2",
		},
	},
	{
		id: "3",
		name: "Product 3",
		price: 30000,
		image: {
			src: "/images/tshirt_3.jpeg",
			alt: "Product 3",
		},
	},
	{
		id: "4",
		name: "Product 4",
		price: 40000,
		image: {
			src: "/images/tshirt_4.jpeg",
			alt: "Product 4",
		},
	},
];

export default function Products() {
	return (
		<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
			<ProductList products={products} />
		</section>
	);
}
