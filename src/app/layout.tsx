import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import "./globals.css";
import { getCategories } from "@/api/categories";
import { getCollections } from "@/api/collections";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clothes for everyone",
	description: "T-shirts, hoodies, and more.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const categories = await getCategories();
	const collections = await getCollections();

	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="border p-4">
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
				</nav>
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
			</body>
		</html>
	);
}
