// Retrieve image with dimensions inside the
// range [threshold - offset, threshold + offset]
export function getBestImageSize(media, threshold, offset) {
	const min = threshold - offset;
	const max = threshold + offset;
	const between = (val, min, max) =>
		val >= min && val <= max;
	for (let i = 0; i < Object.entries(media).length; i++) {
		const imgInfo = Object.entries(media)[i][1];
		if (between(imgInfo.width, min, max) && between(imgInfo.height, min, max))
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
	const postedAt = post
		?.['_embedded']
		?.['wp:featuredmedia']
		?.[0]['date']
		?.split('T')[0]

	return {
		id, link, term,
		title: title.rendered,
		postedAt: formatDate(postedAt, months),
		thumbnail: imageSizes
			? getBestImageSize(imageSizes, 300, 100)
			: undefined,
	}
}

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
]

export const formatDate = (date, months) => {
	if (date === undefined) return '';
	const [year, month,] = date?.split('-');
	return `${months[month - 1]}. ${year}`
}

export const navLinks = [
	{
		'name': 'About',
		'url': '/about'
	},
	{
		'name': 'People',
		'url': '/people'
	},
	{
		'name': 'Research',
		'url': '/projects'
	},
	{
		'name': 'News',
		'url': '/news'
	},
	{
		'name': 'Publications',
		'url': '/publications'
	},
]

export function debounce(func, wait, immediate) {
	var timeout;
	return function () {
		var context = this, args = arguments;
		var later = function () {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};