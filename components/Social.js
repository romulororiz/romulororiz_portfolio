import styles from '@/styles/Social.module.scss';
import { useEffect } from 'react';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaAt,
} from 'react-icons/fa';
import { socialMedia } from '../config';

const Social = () => {
	useEffect(() => {
		setTimeout(() => {
			document.getElementById('line').classList.add(styles.line);
			document
				.getElementById('social')
				.classList.add(`animate__animated`, `animate__fadeInLeft`);
			document.getElementById('social').classList.remove(styles.no_opacity);
		}, 1000);
	}, []);

	return (
		<div className={`${styles.social} ${styles.no_opacity}`} id='social'>
			<a href={socialMedia[1].url} target='_blank' rel='noreferrer noopener'>
				<FaInstagram className={styles.icon} />
			</a>
			<a href={socialMedia[2].url} target='_blank' rel='noreferrer noopener'>
				<FaLinkedinIn className={styles.icon} />
			</a>

			<a href={socialMedia[0].url} target='_blank' rel='noreferrer noopener'>
				<FaGithub className={styles.icon} />
			</a>
			<a href={socialMedia[3].url} target='_blank' rel='noreferrer noopener'>
				<FaTwitter className={styles.icon} />
			</a>

			<a href={socialMedia[4].url} target='_blank' rel='noreferrer noopener'>
				<FaAt className={styles.icon} />
			</a>
			<span id='line'></span>
		</div>
	);
};

export default Social;
