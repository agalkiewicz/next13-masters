"use client";

import { useRouter } from "next/navigation";
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

	const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			const value = e.currentTarget.value;
			router.push(`/search?query=${value.trim()}`);
		}
	};

	return (
		<nav className="flex justify-between border p-4">
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
			<input
				className="border-b-2 focus:outline-none"
				type="search"
				role="searchbox"
				onKeyUp={(e) => handleSearch(e)}
			/>
		</nav>
	);
};
