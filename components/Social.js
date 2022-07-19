import { useEffect } from 'react';
import { socialMedia } from '@/config/index';
import Icon from '@/components/icons/icon';
import styles from '@/styles/Social.module.scss';
import { motion } from 'framer-motion';

const Social = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('line').classList.add(styles.line);
		}, 1800);
	}, []);

	return (
		<motion.div
			initial={{ x: -100, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 1, delay: 1 }}
			className={`${styles.social}`}
			id='social'
		>
			{socialMedia.map(({ name, url }, i) => (
				<a key={i} href={url} target='_blank' rel='noreferrer noopener'>
					<Icon name={name} />
					<span id='line'></span>
				</a>
			))}
		</motion.div>
	);
};

export default Social;
