type ProductCategoryProps = {
	category: string;
};

export const ProductCategory = ({ category }: ProductCategoryProps) => {
	return (
		<p className="text-sm text-gray-500">
			<span className="sr-only">Category</span> {category}
		</p>
	);
};
