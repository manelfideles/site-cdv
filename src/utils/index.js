// Retrieve image with dimensions inside the
// range [threshold - offset, threshold + offset]
export default function getBestAvatar(media, threshold, offset) {
	const min = threshold - offset;
	const max = threshold + offset;
	const between = (val, min, max) =>
		val >= min && val <= max;
	for (let i = 0; i < Object.entries(media).length; i++) {
		const imgInfo = Object.entries(media)[i][1];
		if (between(imgInfo.width, min, max) || between(imgInfo.height, min, max))
			return imgInfo.source_url;
	}
}