import { useFetch } from 'hooks/useFetch'
import { useQueryParam } from 'hooks/useQueryParam';
import Link from 'next/link';

import Pill from 'components/Pill';
import Spinner from 'components/Spinner';

import styles from 'styles/Project.module.scss';
import { getBestImageSize } from 'utils';

export default function Project() {
	const id = useQueryParam('id');
	const {
		data,
		loading
	} = useFetch({
		method: 'getPosts',
		query: `/${id}?_embed`
	});

	const renderTags = () => {
		return data
			._embedded['wp:term'][1]
			.map(({ name, slug }) => (
				<li>
					<Pill text={name} url={slug} />
				</li>
			))
	}

	const renderContent = () => {
		const imageSizes = data
			?._embedded
			?.['wp:featuredmedia']?.[0]
			.media_details.sizes;

		return loading
			? <Spinner />
			: <>
				<img
					src={getBestImageSize(imageSizes, 700, 100)}
					alt={'project display image'}
				/>
				<h2>{data.title.rendered}</h2>
				<p>Published on {data.date.split('T')[0]}</p>
				<div>
					<h4>Author</h4>
					<p>
						<Link href={`/people/${data.author}`}>
							{data._embedded.author[0].name}
						</Link>
					</p>
				</div>
				<ul className={styles.tagsWrapper}>
					{renderTags()}
				</ul>
				<p>{data.content.rendered}</p>
			</>
	}

	return (
		<main className={styles.projectWrapper}>
			{renderContent()}
		</main>
	)
}
