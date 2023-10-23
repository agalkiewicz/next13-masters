"use server";

import { executeGraphql } from "@/api/_helpers";
import { CartSetItemQuantityDocument } from "@/gql/graphql";

export const changeItemQuantity = async (itemId: string, quantity: number) => {
	return executeGraphql(CartSetItemQuantityDocument, { itemId, quantity });
};
