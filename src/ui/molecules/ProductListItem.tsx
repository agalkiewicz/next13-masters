import Link from "next/link";
import { ProductPhoto } from "@/ui/atoms/ProductThumbnail";

import { type ProductsListItemType } from "@/types";
import { ProductBasicInfo } from "@/ui/molecules/ProductBasicInfo";

export type ProductListItemProps = {
	product: ProductsListItemType;
};

export const ProductListItem = ({
	product: { id, name, price, image, category },
}: ProductListItemProps) => {
	return (
		<li>
			<article>
				<Link href={`/product/${id}`} prefetch={true}>
					<ProductPhoto src={image.src} alt={image.alt} />
				</Link>
				<ProductBasicInfo name={name} price={price} category={category} />
			</article>
		</li>
	);
};
