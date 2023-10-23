"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { ActiveLink } from "../atoms/ActiveLink";

type Category = { id: string; name: string; slug: string };

export const Navbar = ({
	categories,
	collections,
}: {
	categories: Category[];
	collections: Category[];
}) => {
	const router = useRouter();

	const [inputValue, setInputValue] = useState<string>("");
	const [debouncedValue] = useDebounce(inputValue, 500);

	useEffect(() => {
		if (debouncedValue) {
			router.push(`/search?query=${debouncedValue}`);
		}
	});

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	return (
		<nav className="flex justify-between border px-12 py-4">
			<ul>
				<ActiveLink href="/">Home</ActiveLink>
				<ActiveLink href="/products" exact={false}>
					All
				</ActiveLink>
				{categories.map(({ id, name }) => (
					<ActiveLink key={id} href={`/categories/${id}`} exact={false}>
						{name}
					</ActiveLink>
				))}
				{collections.map(({ id, name }) => (
					<ActiveLink key={id} href={`/collections/${id}`} exact={false}>
						{name}
					</ActiveLink>
				))}
			</ul>
			<div className="flex gap-12">
				<input
					className="border-b-2 focus:outline-none"
					type="search"
					role="searchbox"
					onChange={handleInputChange}
				/>
				<Link href="/cart">
					<ShoppingCart />
				</Link>
			</div>
		</nav>
	);
};
