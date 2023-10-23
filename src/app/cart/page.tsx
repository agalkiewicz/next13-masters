import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { formatMoney } from "@/utils";
import { getOrCreateCart } from "@/api/cart";

export default async function CartPage() {
	const cartId = cookies().get("cartId")?.value;

	if (!cartId) {
		redirect("/");
	}

	const cart = await getOrCreateCart();

	if (!cart) {
		redirect("/");
	}

	return (
		<div>
			<h1 className="text-2xl font-semibold">Order #{cart.id} summary</h1>
			<table className="mt-8">
				<thead>
					<tr>
						<th className="border px-6 py-3 text-left">Product</th>
						<th className="border px-6 py-3 text-left">Quantity</th>
						<th className="border px-6 py-3 text-left">Price</th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.id}>
								<td className="border px-6 py-3">{item.product.name}</td>
								<td className="border px-6 py-3">{item.quantity}</td>
								<td className="border px-6 py-3">{formatMoney(item.product.price)}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
