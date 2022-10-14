// Retrieve image with dimensions inside the
// range [threshold - offset, threshold + offset]
export function getBestImageSize(media, threshold, offset) {
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

export function formatPost(post) {
	const { id, link, title } = post;
	const imageSizes = post
		?.['_embedded']
		?.['wp:featuredmedia']
		?.[0]['media_details']
		?.['sizes']

	const term = post
		?.['_embedded']
		?.['wp:term']
		?.[0][0]['slug']

	return {
		id: id,
		link: link,
		title: title.rendered,
		thumbnail: imageSizes
			? getBestImageSize(imageSizes, 300, 100)
			: undefined,
		term: term,
	}
}