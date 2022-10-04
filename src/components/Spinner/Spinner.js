import { BeatLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

export default function Spinner() {
	return (
		<div className={styles.loader}>
			<BeatLoader
				color='#666666'
				size={12}
			/>
		</div>
	)
}
