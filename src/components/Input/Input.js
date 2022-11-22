import dynamic from 'next/dynamic';

const Button = dynamic(() => import('components/Button'));

import styles from './Input.module.scss';

export default function Input() {
	return (
		<div className={styles.inputContainer}>
			<label htmlFor='email'>
				Sign up to our newsletter
			</label>
			<div>
				<input type='email' id='email' />
				<Button btnText='Sign Up' onClick={() => console.log('Sign Up')} />
			</div>
		</div>
	)
}
