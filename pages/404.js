import styles from '@/styles/404.module.scss';
import { BsExclamationTriangle } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const NotFound = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 80 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className={styles.not_found}
		>
			<div className={styles.icon_status}>
				<BsExclamationTriangle className={styles.icon} />
				<h1>404</h1>
			</div>
			<span>Page Not Found</span>
			<Link href='/'>Back</Link>
		</motion.div>
	);
};

export default NotFound;
