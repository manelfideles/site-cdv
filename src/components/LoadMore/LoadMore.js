import Spinner from 'components/Spinner';

import styles from './LoadMore.module.scss';

export default function LoadMore({ isLoading, onClick }) {
	const renderLoadingState = () =>
		isLoading
			? <Spinner />
			: <button onClick={onClick}>
				load more
			</button>

	return (
		<div className={styles.loadMoreContainer}>
			{renderLoadingState()}
		</div>
	)
}
