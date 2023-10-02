"use client";

import React, { type ReactNode } from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { type Route } from "next";

export const ActiveLink = ({
	exact = true,
	href,
	children,
}: {
	exact?: boolean;
	href: Route;
	children: ReactNode;
}) => {
	const pathname = usePathname();
	const isActive = exact ? pathname === href : pathname.startsWith(href);

	return (
		<Link
			href={href}
			className={clsx(
				`border-l-slate-700 px-4 even:border-l-2 hover:text-slate-500`,
				isActive && "text-slate-500",
			)}
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</Link>
	);
};