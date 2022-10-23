import styles from './Button.module.scss';

export default function Button({
	btnText,
	onClick,
}) {
	return (
		<div className={styles.buttonContainer}>
			<button onClick={onClick}>
				{btnText}
			</button>
		</div>
	)
}
