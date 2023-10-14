import { type Metadata } from "next";
import { getProduct } from "@/api/products";
import { ProductPrice } from "@/ui/atoms/ProductPrice";
import { ProductPhoto } from "@/ui/atoms/ProductThumbnail";
import { ProductCategory } from "@/ui/atoms/ProductCategory";
import { RelatedProducts } from "@/ui/organisms/RelatedProducts";

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
	params,
}: {
	params: { productId: string };
}) {
	const product = await getProduct(productId);
	const { image, name, price, description, category } = product;

	async function addProductToCartAction() {
		"use server";
		console.log("productId", params.productId);
	}

	return (
		<>
			<div className="m-auto mb-12 flex gap-14">
				{image && <ProductPhoto src={image.src} alt={image.alt} big />}
				<form className="w-96" action={addProductToCartAction}>
					<div className="flex justify-between">
						<h1 className="font-semibold text-slate-700">{name}</h1>
						<ProductPrice price={price} />
					</div>
					<ProductCategory category={category} />
					<p className="mt-2 text-xs text-slate-600">{description}</p>
					<button
						type="submit"
						className="mt-8 w-full rounded-md border bg-slate-700 px-8 py-3 text-white"
					>
						Add to cart
					</button>
				</form>
			</div>
			<RelatedProducts categoryName={category} excludedId={productId} />
		</>
	);
}
