import styles from '@/styles/Spinner.module.scss';

const Spinner = () => {
	return (
		<div className={styles.loaderSection}>
			<span>Loading...</span>
			<span className={styles.loader}></span>
		</div>
	);
};

export default Spinner;
