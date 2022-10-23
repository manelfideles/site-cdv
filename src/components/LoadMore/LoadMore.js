import styles from './LoadMore.module.scss';

export default function LoadMore({ onClick }) {
	return (
		<div className={styles.loadMoreContainer}>
			<button onClick={onClick}>
				load more
			</button>
		</div>
	)
}
