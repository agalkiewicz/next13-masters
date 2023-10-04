import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ActiveLink } from "@/ui/atoms/ActiveLink";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Clothes for everyone",
	description: "T-shirts, hoodies, and more.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<nav className="border p-4">
					<ol>
						<ActiveLink href="/">Home</ActiveLink>
						<ActiveLink href="/products" exact={false}>
							All
						</ActiveLink>
					</ol>
				</nav>
				{children}
			</body>
		</html>
	);
}
