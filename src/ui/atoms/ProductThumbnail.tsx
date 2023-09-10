export type ProductThumbnailProps = {
	src: string;
	alt: string;
	width: number;
	height: number;
};

export const ProductThumbnail = ({
	src,
	alt,
	width = 120,
	height = 120,
}: {
	src: string;
	alt: string;
	width: number;
	height: number;
}) => {
	// eslint-disable-next-line @next/next/no-img-element
	return (
		<div className="aspect-square overflow-hidden rounded-md bg-slate-50 hover:bg-slate-100">
			<img
				className="h-full w-full object-cover object-center p-4 transition-transform hover:scale-105"
				src={src}
				alt={alt}
				width={width}
				height={height}
			/>
		</div>
	);
};
