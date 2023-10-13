import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { getCategories } from "@/api/categories";
import { getCollections } from "@/api/collections";
import { Navbar } from "@/ui/organisms/Navbar";

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
				<Navbar collections={collections} categories={categories} />
				<section className="mx-auto max-w-md p-12 sm:max-w-2xl sm:py-16 md:max-w-4xl lg:max-w-7xl">
					{children}
				</section>
			</body>
		</html>
	);
}
