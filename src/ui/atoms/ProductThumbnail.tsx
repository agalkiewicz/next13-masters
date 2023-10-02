export type ProductThumbnailProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const ProductPhoto = ({
	src,
	alt,
	big = false,
}: {
	src: string;
	alt: string;
	big?: boolean;
}) => {
	const width = big ? "w-[600px]" : "";
	const height = big ? "h[600px]" : "";

	// eslint-disable-next-line @next/next/no-img-element
	return (
		<div
			className={`aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100 ${width} ${height}`}
		>
			<img
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				src={src}
				alt={alt}
			/>
		</div>
	);
};
