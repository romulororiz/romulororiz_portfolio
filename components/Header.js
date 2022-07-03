import Link from 'next/link';
import { navLinks } from '@config';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/Header.module.scss';
import useScrollDirection from 'hooks/useScrollDirection';
import useOnClickOutside from 'hooks/useOnClickOutside';
import Head from 'next/head';

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
			// Reset Hamburger menu status on resize
			document.getElementById(styles.menu_toggle).checked = false;
		}
	};

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop < 50);
	};

	useEffect(() => {
		// Prevent scroll on mobile menu open
		if (showMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, [showMenu]);

	// Close mobile menu when click outside
	// const menuWrapperRef = useRef();
	// useOnClickOutside(menuWrapperRef, () => {
	// 	setShowMenu(false);
	// 	document.getElementById(styles.menu_toggle).checked = false;
	// });

	return (
		<>
			<Head>
				{/* Implement blur on menu mobile open */}
				<body />
			</Head>
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
		</>
	);
};

export default Header;
