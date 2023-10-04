import { type Route } from "next";
import { ActiveLink } from "../atoms/ActiveLink";

type PaginationProps = {
	totalElements: number;
	elementsPerPage: number;
	url: Route;
};

export const Pagination = ({ totalElements, elementsPerPage, url }: PaginationProps) => {
	const totalPages = Math.ceil(totalElements / elementsPerPage);
	const pages = Array.from(Array(totalPages).keys());

	return (
		<div aria-label="pagination">
			{pages.map((page) => (
				<ActiveLink href={`${url}/${page + 1}` as Route} key={page}>
					{page + 1}
				</ActiveLink>
			))}
		</div>
	);
};
