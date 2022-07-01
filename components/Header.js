import Link from 'next/link';
import { navLinks } from '@config';
import { useEffect, useState } from 'react';
import styles from '@/styles/Header.module.scss';
import useScrollDirection from 'hooks/useScrollDirection';

const logo = `<RR/>`;

const Header = () => {
	const [scrollTop, setScrollTop] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const scrollDirection = useScrollDirection('down');

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleResize = e => {
		if (e.currentTarget.innerWidth > 1200) {
			setShowMenu(false);
			const toggle = document.getElementById(styles.menu_toggle);
			toggle.checked = false;
		}
	};

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop < 50);
	};

	useEffect(() => {
		if (window.screen.width > 1200) {
			setShowMenu(false);
			const toggle = document.getElementById(styles.menu_toggle);
			toggle.checked = false;
			console.log(toggle);
		}

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, []);

	return (
		<div
			className={`${
				scrollDirection === 'up' && !scrollTop
					? styles.scrollUp
					: scrollDirection === 'down' && !scrollTop
					? styles.scrollDown
					: styles.header
			}`}
		>
			<div className={styles.logo_wrapper}>
				<h1>{logo}</h1>
			</div>
			{/* Nav Desktop */}
			<div className={styles.nav_desktop}>
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

			{/* Hamburger Menu */}
			<input id={styles.menu_toggle} type='checkbox' />
			<label
				onClick={handleShowMenu}
				className={styles.menu_button_container}
				htmlFor={styles.menu_toggle}
			>
				<div className={styles.menu_button}></div>
			</label>

			{/* Nav Mobile */}
			<div className={`${styles.nav_mobile} ${showMenu && styles.active}`}>
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
