import { notFound } from "next/navigation";
import { type Metadata } from "next";
import { getCollection } from "@/api/collections";
import { ProductList } from "@/ui/organisms/ProductList";

export async function generateMetadata({
	params: { id },
}: {
	params: { id: string };
}): Promise<Metadata> {
	const collection = await getCollection(id);

	return {
		title: collection.name,
	};
}

export default async function CollectionProducts({ params: { id } }: { params: { id: string } }) {
	const collection = await getCollection(id);

	if (!collection) {
		notFound();
	}

	return (
		<>
			<h1 className="mb-6 text-lg">{collection.name}</h1>
			<ProductList products={collection.products} />
		</>
	);
}
