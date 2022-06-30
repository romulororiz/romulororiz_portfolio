import styles from '@/styles/Header.module.scss';
import { navLinks } from '../config';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const logo = `<romuloR />`;

const Header = () => {
	const [scrollTop, setScrollTop] = useState(true);

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop < 50);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	console.log(scrollTop);

	return (
		<div className={styles.header}>
			<div className={styles.logo_wrapper}>
				<h1>{logo}</h1>
			</div>
			<div>
				<ol>
					{navLinks &&
						navLinks.map(({ url, name }, i) => (
							<li key={i}>
								<Link href={url}>{name}</Link>
							</li>
						))}
				</ol>
				<a className={styles.btn} href='#' rel='noopener noreferrer'>
					Resume
				</a>
			</div>
		</div>
	);
};

export default Header;
