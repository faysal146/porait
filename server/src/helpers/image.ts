import sharp, { OutputInfo, ResizeOptions } from 'sharp';

export const resizeImage = (
	fileChank: Buffer[],
	uploadFolder: string,
	opt: ResizeOptions
): Promise<OutputInfo> => {
	return sharp(Buffer.concat(fileChank))
		.resize({
			...opt
		})
		.withMetadata()
		.toFormat('png')
		.toFile(uploadFolder);
};
