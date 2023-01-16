import NextImage from 'next/image';

const Image = ({ width, height, src, alt }) => {
	return (
		<NextImage
			layout='intrinsic'
			width={width}
			height={height}
			objectFit='fill'
			src={src}
			alt={alt || ''}
			priority
			placeholder='blur'
			blurDataURL={src}
		/>
	);
};

export default Image;
