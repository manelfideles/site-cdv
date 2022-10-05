import { useMemo } from 'react';
import { useRouter } from 'next/router';

/**
 *
 * @param key the query key
 * @returns the query value to the query key
 */
export const useQueryParam = (key) => {
	const { query, asPath } = useRouter();

	const value = useMemo(() => {
		if (!query[key]) return;
		const match = asPath.match(new RegExp(`[0-9]*$`));
		return decodeURIComponent(match[0]);
	}, [query, asPath]);

	return value;
};