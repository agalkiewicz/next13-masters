export type ProductsListItemType = {
	id: string;
	name: string;
	category: string;
	description: string;
	price: number;
	image?: { src: string; alt: string };
};
