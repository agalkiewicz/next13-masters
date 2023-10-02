import { formatMoney } from "@/utils";

export type ProductPriceProps = {
	price: number;
};

export const ProductPrice = ({ price }: ProductPriceProps) => {
	return (
		<p className="text-sm font-medium text-gray-900">
			<span className="sr-only">Price</span>
			{formatMoney(price / 100)}
		</p>
	);
};
