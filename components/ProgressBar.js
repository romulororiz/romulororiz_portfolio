import styles from '@/styles/ProgressBar.module.scss';
import { motion } from 'framer-motion';

const ProgressBar = ({ percentage }) => {
	return (
		<div className={styles.progressBarWrapper}>
			<motion.span
				initial={{ width: 0 }}
				whileInView={{ width: `${percentage}` }}
				viewport={{ once: 'true', amount: 'some' }}
				transition={{ duration: 2 }}
				className={styles.progressBar}
			></motion.span>
		</div>
	);
};

export default ProgressBar;
