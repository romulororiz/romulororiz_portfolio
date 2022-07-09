import styles from '@/styles/Footer.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { socialMedia } from '../config';
import Icon from './icons/icon';

const Footer = () => {
	const [showSocial, setShowSocial] = useState('');

	const handleResize = useCallback(() => {
		if (window.innerWidth <= 1170) {
			setShowSocial(true);
		} else {
			setShowSocial(false);
		}
	}, []);

	useEffect(() => {
		window.innerWidth <= 1170 && setShowSocial(true);

		return () => {
			window.addEventListener('resize', handleResize);
		};
	}, [handleResize]);

	return (
		<div className={styles.footer}>
			<div className={styles.social}>
				{showSocial &&
					socialMedia.map(({ name, url }, i) => (
						<a href={url} key={i} target='_blank' rel='noopener noreferrer'>
							<Icon name={name} />
						</a>
					))}
			</div>
			<p>&copy; Romulo Roriz 2022</p>
		</div>
	);
};

export default Footer;
