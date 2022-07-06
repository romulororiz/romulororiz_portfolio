import styles from '@/styles/Social.module.scss';
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
	FaAt,
} from 'react-icons/fa';
import { socialMedia } from '../config';

const Social = () => {
	return (
		<div className={styles.social}>
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
			<span className={styles.line}></span>
		</div>
	);
};

export default Social;
