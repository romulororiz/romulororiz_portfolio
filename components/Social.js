import { useEffect } from 'react';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaAt,
} from 'react-icons/fa';
import { socialMedia } from '@/config/index';
import Icon from '@/components/icons/icon';
import styles from '@/styles/Social.module.scss';

const Social = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('line').classList.add(styles.line);
			document
				.getElementById('social')
				.classList.add(`animate__animated`, `animate__fadeInLeft`);
			document.getElementById('social').classList.remove(styles.no_opacity);
		}, 2000);
	}, []);

	return (
		<div className={`${styles.social} ${styles.no_opacity}`} id='social'>
			{socialMedia.map(({ name, url }, i) => (
				<a key={i} href={url} target='_blank' rel='noreferrer noopener'>
					<Icon name={name} />
					<span id='line'></span>
				</a>
			))}
		</div>
	);
};

export default Social;
