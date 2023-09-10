import { formatMoney } from "@/utils";

export type ProductBasicInfoProps = {
	name: string;
	price: number;
};

export const ProductBasicInfo = ({ name, price }: ProductBasicInfoProps) => {
	return (
		<div className="mt-2 flex justify-between">
			<div>
				<h3 className="text-sm font-semibold text-gray-700">{name}</h3>
				<p className="text-sm text-gray-500">
					<span className="sr-only">Category</span> T-shirts
				</p>
			</div>
			<p className="text-sm font-medium text-gray-900">
				<span className="sr-only">Price</span>
				{formatMoney(price / 100)}
			</p>
		</div>
	);
};
