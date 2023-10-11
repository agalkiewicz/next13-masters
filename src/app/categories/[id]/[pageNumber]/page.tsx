import { notFound } from "next/navigation";
import { getCategory } from "@/api/categories";

export default async function CategoryProducts({
	params: { id },
}: {
	params: { id: string; pageNumber?: string };
}) {
	const category = await getCategory(id);

	if (!category) {
		notFound();
	}

	return <h1>{category.name}</h1>;
}
