"use client";
import { experimental_useOptimistic as useOptimistic } from "react";
import { changeItemQuantity } from "./actions";

export const Quantity = ({ itemId, quantity }: { itemId: string; quantity: number }) => {
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic<number>(quantity);

	return (
		<form className="flex">
			<span className="w-8 text-center">{optimisticQuantity}</span>
			<button
				className="flex h-6 w-6 justify-center border align-middle"
				type="submit"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await changeItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
};
