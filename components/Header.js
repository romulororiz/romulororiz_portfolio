import styles from '@/styles/Header.module.scss';
import { navLinks } from '../config';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const logo = `<romuloR />`;

const Header = () => {
	const [scrollTop, setScrollTop] = useState(0);

	console.log(scrollTop);

	useEffect(() => {
		if (typeof window !== undefined) {
			window.addEventListener('scroll', () => {
				if (document.documentElement.scrollTop > 50) {
					setScrollTop(true);
				}
			});
		}
	}, []);

	return (
		<div className={styles.header}>
			<div className={styles.logo_wrapper}>
				<h1>{logo}</h1>
			</div>
			<ol>
				{navLinks &&
					navLinks.map(({ url, name }, i) => (
						<li key={i}>
							<Link href={url}>{name}</Link>
						</li>
					))}
				<button className={styles.resume_btn}>
					<a href='#' rel='noopener noreferrer'>
						Resume
					</a>
				</button>
			</ol>
		</div>
	);
};

export default Header;
