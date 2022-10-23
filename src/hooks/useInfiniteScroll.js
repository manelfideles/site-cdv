import useSWRInfinite from 'swr/infinite';
import api from 'networking';

export const useInfiniteScroll = ({ method, pageSize }) => {
	const fetcher = query => api[method](query || '').then(res => res.data);
	const {
		data,
		error, /* mutate, */
		size,
		setSize
	} = useSWRInfinite(
		index => `?_embed&_fields=id,title,link,_links&page=${index + 1}&per_page=${pageSize}`,
		fetcher
	);

	return {
		posts: data ? [].concat(...data) : [],
		isLoading: (!data && !error)
			|| (size > 0 && data && typeof data[size - 1] === "undefined"),
		error,
		setSize,
	}
}
