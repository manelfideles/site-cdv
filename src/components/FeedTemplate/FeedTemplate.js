import dynamic from 'next/dynamic';

const Gallery = dynamic(() => import('components/Gallery'));

import styles from './FeedTemplate.module.scss';

export default function FeedTemplate({ pageTitle, pageSize, term }) {
	return (
		<main>
			<h2 className={styles.pageTitle}>
				{pageTitle}
			</h2>
			<Gallery
				pageSize={pageSize}
				postType={term}
			/>
		</main>
	)
}
