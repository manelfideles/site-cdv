import Link from 'next/link';

import styles from './Pill.module.scss';

export default function Pill({ text, url }) {
	return (
		<Link href={url}>
			<div className={styles.pillWrapper}>
				{text}
			</div>
		</Link>
	)
}
