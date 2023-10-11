import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import "./globals.css";
import { getCategories } from "@/api/categories";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clothes for everyone",
	description: "T-shirts, hoodies, and more.",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const categories = await getCategories();

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
					</ul>
				</nav>
				{children}
			</body>
		</html>
	);
}
