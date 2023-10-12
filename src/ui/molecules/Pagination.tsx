"use client";

import { type Route } from "next";
import { usePathname } from "next/navigation";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	totalElements: number;
	elementsPerPage: number;
};

export const Pagination = ({ totalElements, elementsPerPage }: PaginationProps) => {
	const pathname = usePathname();
	const pathnameWithoutPage = pathname.split("/").slice(0, -1).join("/");

	const totalPages = Math.ceil(totalElements / elementsPerPage);
	const pages = Array.from(Array(totalPages).keys());

	return (
		<div aria-label="pagination">
			{pages.map((page) => (
				<ActiveLink href={`${pathnameWithoutPage}/${page + 1}` as Route} key={page}>
					{page + 1}
				</ActiveLink>
			))}
		</div>
	);
};
