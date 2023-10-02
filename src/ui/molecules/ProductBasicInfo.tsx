import { ProductCategory } from "../atoms/ProductCategory";
import { ProductPrice } from "../atoms/ProductPrice";

export type ProductBasicInfoProps = {
	name: string;
	price: number;
	category: string;
};

export const ProductBasicInfo = ({ name, price, category }: ProductBasicInfoProps) => {
	return (
		<div className="mt-2 flex w-full justify-between">
			<div>
				<h3 className="text-sm font-semibold text-slate-700">{name}</h3>
				<ProductCategory category={category} />
			</div>
			<ProductPrice price={price} />
		</div>
	);
};
