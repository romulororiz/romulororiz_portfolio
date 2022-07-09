import Link from 'next/link';
import { navLinks } from '@/config/index';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from '@/styles/Header.module.scss';
import useScrollDirection from 'hooks/useScrollDirection';
import useOnClickOutside from 'hooks/useOnClickOutside';
import 'animate.css';

const logo = (
	<>
		<span>&#60;</span>RR /<span>&#62;</span>
	</>
);

const Header = () => {
	const [scrollTop, setScrollTop] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const scrollDirection = useScrollDirection('down');
	if (typeof window !== undefined) {
	}

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleResize = useCallback(e => {
		if (e.currentTarget.innerWidth > 1200) {
			setShowMenu(false);
			// Reset Hamburger menu status on resize
			handleCheckedStatus();
		}
	}, []);

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop < 50);
	};

	const handleCheckedStatus = () => {
		const toggle = document.getElementById(styles.menu_toggle);
		toggle.checked = false;
	};

	useEffect(() => {
		// Prevent scroll on mobile menu open
		const body = document.getElementById('body');
		if (showMenu) {
			body.style.overflowY = 'hidden';
		} else {
			body.style.overflowY = 'auto';
		}

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, [handleResize, showMenu]);

	// todo
	// Close mobile menu when click outside
	// const menuWrapperRef = useRef();
	// useOnClickOutside(
	// 	menuWrapperRef,
	// 	useCallback(() => {
	// 		setShowMenu(false)
	// 	}, [])
	// );

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
				<Link href='/'>
					<h1>{logo}</h1>
				</Link>
			</div>

			{/* Nav Desktop */}
			<div className={styles.nav_desktop}>
				<ol>
					{navLinks &&
						navLinks.map(({ url, name }, i) => (
							<li
								key={i}
								className='animate__animated animate__zoomIn'
								style={{ animationDelay: `${i * 300}ms` }}
							>
								<Link href={url}>{name}</Link>
							</li>
						))}
				</ol>
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
							<li
								key={i}
								onClick={() => {
									setShowMenu(false);
									handleCheckedStatus();
								}}
							>
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
