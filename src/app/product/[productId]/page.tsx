import { type Metadata } from "next";
import { getProduct } from "@/api/products";
import { ProductPrice } from "@/ui/atoms/ProductPrice";
import { ProductPhoto } from "@/ui/atoms/ProductThumbnail";
import { ProductCategory } from "@/ui/atoms/ProductCategory";

export async function generateMetadata({
	params: { productId },
}: {
	params: { productId: string };
}): Promise<Metadata> {
	const product = await getProduct(productId);
	const { name, description } = product;

	return {
		title: name,
		description,
	};
}

export default async function ProductDetailsPage({
	params: { productId },
}: {
	params: { productId: string };
}) {
	const product = await getProduct(productId);
	const { image, name, price, description, category } = product;

	return (
		<div className="m-auto flex gap-14 px-24 py-12">
			{image && <ProductPhoto src={image.src} alt={image.alt} big />}
			<div className="w-96">
				<div className="flex justify-between">
					<h1 className="font-semibold text-slate-700">{name}</h1>
					<ProductPrice price={price} />
				</div>
				<ProductCategory category={category} />
				<p className="mt-2 text-xs text-slate-600">{description}</p>
			</div>
		</div>
	);
}
