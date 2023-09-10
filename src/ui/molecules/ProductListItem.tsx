import { ProductThumbnail } from "@/ui/atoms/ProductThumbnail";

import { type ProductListItemType } from "@/types";
import { ProductBasicInfo } from "@/ui/atoms/ProductBasicInfo";

export type ProductListItemProps = {
	product: ProductListItemType;
};

export const ProductListItem = ({ product: { name, price, image } }: ProductListItemProps) => {
	return (
		<li>
			<article>
				<ProductThumbnail src={image.src} alt={image.alt} width={64} height={64} />
				<ProductBasicInfo name={name} price={price} />
			</article>
		</li>
	);
};
