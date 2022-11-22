import styles from './Button.module.scss';

export default function Button({
	btnText,
	onClick,
}) {
	return (
		<button
			onClick={onClick}
			className={styles.button}
		>
			{btnText}
		</button>
	)
}
