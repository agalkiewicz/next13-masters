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
			className={clsx(`px-4 hover:text-slate-400`, isActive && "font-medium text-slate-400")}
			{...(isActive && { "aria-current": "page" })}
		>
			{children}
		</Link>
	);
};
