import {
	useState,
	useEffect,
	useCallback
} from 'react';

import { useFetch } from 'hooks/useFetch';
import { formatPost } from 'utils';

import LoadMore from 'components/LoadMore';

import styles from 'styles/Projects.module.scss';
import GalleryItem from 'components/GalleryItem';

const baseQuery = '?_fields=id,title,link,_links&_embed&page=1&per_page=15';

export default function Research() {
	const [posts, setPosts] = useState([]);
	const [pageNumber, setPageNumber] = useState(1);
	const [query, setQuery] = useState(baseQuery)
	const [hasNextPage, setHasNextPage] = useState(true);
	const {
		data,
		loading
	} = useFetch({
		method: 'getPosts',
		query: query
	});

	const handleData = useCallback(() => {
		if (!loading) {
			setPosts([
				...posts,
				...data.map(post => formatPost(post))
			]);
			/* TO-DO: Change this if field is present in response object */
			setHasNextPage(true);
		}
		/* eslint-disable-next-line react-hooks/exhaustive-deps */
	}, [loading])

	useEffect(() => {
		setQuery(
			query.replace(
				`&page=${pageNumber - 1}&`,
				`&page=${pageNumber}&`
			)
		)
	}, [query, pageNumber])

	useEffect(() => handleData(), [handleData])

	const renderProjects = () => {
		return posts
			.filter(({ term }) => term == 'projects')
			.map(({
				id, link,
				title, thumbnail
			}) => <GalleryItem
					key={id}
					id={id}
					link={link}
					term='projects'
					title={title}
					thumbnail={thumbnail}
				/>)
	}

	return (
		<main className={styles.projectsWrapper}>
			<h2>Research</h2>
			{renderProjects()}
			<div>
				<LoadMore
					isLoading={loading}
					onClick={() => setPageNumber(pageNumber + 1)}
				/>
			</div>
		</main>
	)
}
