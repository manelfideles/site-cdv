import { useFetch } from 'hooks/useFetch'
import { useQueryParam } from 'hooks/useQueryParam';
import Link from 'next/link';

import Pill from 'components/Pill';
import Spinner from 'components/Spinner';

import styles from './Post.module.scss';
import { getBestImageSize } from 'utils';

export default function Post() {
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
			.map(({ name, slug }, idx) => (
				<li key={idx}>
					<Pill text={name} url={slug} />
				</li>
			))
	}

	const formatHtml = () => {
		return data.content.rendered
			.replaceAll('<p>&nbsp;</p>', '')
	}

	const renderContent = () => {
		const imageSizes = data
			?._embedded
			?.['wp:featuredmedia']?.[0]
			?.media_details?.sizes;

		return loading
			? <Spinner />
			: <>
				{![undefined, null].includes(imageSizes) &&
					<img
						src={getBestImageSize(imageSizes, 500, 100)}
						alt={'Post Thumbnail'}
					/>
				}
				<h2 dangerouslySetInnerHTML={{ __html: data.title.rendered }}>
				</h2>
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
				<div
					dangerouslySetInnerHTML={{ __html: formatHtml(data.content.rendered) }}
					style={{ width: '100%' }}
					className={styles.contentWrapper}
				>
				</div>
			</>
	}

	return (
		<main className={styles.postWrapper}>
			{renderContent()}
		</main>
	)
}