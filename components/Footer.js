import styles from '@/styles/Footer.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { socialMedia } from '@/config/index';
import Icon from '@/components/icons/icon';
import { motion } from 'framer-motion';

const Footer = () => {
	const [showSocial, setShowSocial] = useState(false);

	const handleResize = useCallback(() => {
		if (window.innerWidth <= 1170) {
			setShowSocial(true);
		} else {
			setShowSocial(false);
		}
	}, []);

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			viewport={{ once: 'true', amount: 'some' }}
			transition={{ duration: 0.8 }}
			className={styles.footer}
		>
			<div className={styles.social}>
				{showSocial &&
					socialMedia.map(({ name, url }, i) => (
						<a href={url} key={i} target='_blank' rel='noopener noreferrer'>
							<Icon name={name} />
						</a>
					))}
			</div>
			<p>&copy; Romulo Roriz 2022</p>
		</motion.div>
	);
};

export default Footer;
