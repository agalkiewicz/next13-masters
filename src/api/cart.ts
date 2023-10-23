import { cookies } from "next/headers";
import { executeGraphql } from "./_helpers";
import {
	CartAddItemDocument,
	CartCreateDocument,
	CartGetByIdDocument,
	ProductGetByIdDocument,
} from "@/gql/graphql";

export const getOrCreateCart = async () => {
	const cartId = cookies().get("cartId")?.value;
	if (cartId) {
		const { order: cart } = await executeGraphql(CartGetByIdDocument, {
			id: cartId,
		});
		if (cart) {
			return cart;
		}
	}

	const { createOrder: newCart } = await executeGraphql(CartCreateDocument, {});
	if (!newCart) {
		throw new Error("Failed to create cart");
	}

	cookies().set("cartId", newCart.id);
	return newCart;
};

export const addProductToCart = async (cartId: string, productId: string) => {
	const { product } = await executeGraphql(ProductGetByIdDocument, {
		id: productId,
	});
	if (!product) {
		throw new Error(`Product with id ${productId} not found`);
	}

	await executeGraphql(CartAddItemDocument, {
		cartId,
		productId,
		total: product.price,
	});
};
