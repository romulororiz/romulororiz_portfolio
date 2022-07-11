import styles from '@/styles/ProgressBar.module.scss';

const ProgressBar = ({ percentage }) => {
	return (
		<div className={styles.progressBarWrapper}>
			<span
				className={styles.progressBar}
				style={{ width: `${percentage}` }}
			></span>
		</div>
	);
};

export default ProgressBar;
