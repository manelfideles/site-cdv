import { useFetch } from 'hooks/useFetch'
import { useQueryParam } from 'hooks/useQueryParam';

export default function Project() {
	const id = useQueryParam('id');
	const {
		data,
		loading
	} = useFetch({
		method: 'getProjects',
		query: `/${id}&_embed`
	});

	console.log({ data });

	return (
		<div>Project</div>
	)
}
