import { SyncLoader } from 'react-spinners';

import styles from './Spinner.module.scss';

export default function Spinner() {
	return (
		<div className={styles.loader}>
			<SyncLoader color='#666666' />
		</div>
	)
}
