import styles from '@/styles/Footer.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { socialMedia } from '@/config/index';
import Icon from '@/components/icons/icon';
import { motion } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';

const Footer = () => {
	const [showSocial, setShowSocial] = useState(false);
	const [windowDimension, setWindowDimension] = useState(0);
	const windowSize = useWindowSize();

	useEffect(() => {
		setWindowDimension(windowSize.width);

		windowDimension <= 1170 ? setShowSocial(true) : setShowSocial(false);
	}, [windowDimension, windowSize.width]);

	return (
		<motion.div
			initial={{ y: 80, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
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
