import Link from 'next/link';
import { navLinks } from '@/config/index';
import { useEffect, useState } from 'react';
import styles from '@/styles/Header.module.scss';
import useScrollDirection from 'hooks/useScrollDirection';
import { motion } from 'framer-motion';
import 'animate.css';

const logo = (
	<>
		<span>&#60;</span>RR /<span>&#62;</span>
	</>
);

const Header = () => {
	const [scrollTop, setScrollTop] = useState(true);
	const [showMenu, setShowMenu] = useState(false);
	const [windowDimension, setWindowDimension] = useState(0);
	const scrollDirection = useScrollDirection('down');

	const handleShowMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleScroll = () => {
		setScrollTop(document.documentElement.scrollTop < 50);
	};

	const handleCheckedStatus = () => {
		const toggle = document.getElementById(styles.menu_toggle);
		toggle.checked = false;
	};

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		// Prevent scroll on mobile menu open
		const body = document.getElementById('body');
		if (showMenu) {
			body.style.overflowY = 'hidden';
		} else {
			body.style.overflowY = 'auto';
		}

		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener('scroll', handleScroll);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.addEventListener('resize', handleResize);
		};
	}, [showMenu]);

	const isMobile = windowDimension <= 860;

	// Motion
	// Desktop Nav
	const variants = {
		initial: { opacity: 0, y: '-100%' },
		animate: i => ({
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
				delay: i * 0.2,
			},
		}),
	};

	// Mobile Nav
	const olVariant = {
		opened: {
			transition: {
				delayChildren: 0.1,
				staggerChildren: 0.15,
			},
		},
		closed: {
			transition: {
				staggerChildren: 0.06,
				staggerDirection: -1,
			},
		},
	};
	const liVariant = {
		opened: {
			opacity: 1,
			x: '0%',
			transition: {
				duration: 0.45,
			},
		},
		closed: {
			opacity: 0,
			x: '130%',
			transition: {
				duration: 0,
			},
		},
	};

	const aVariant = {
		opened: {
			opacity: 1,
			x: '-50%',
			transition: {
				duration: 0.85,
			},
		},
		closed: {
			opacity: 0,
			x: '120%',
			transition: {
				duration: 0,
			},
		},
	};

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
							<motion.li
								key={i}
								custom={i}
								variants={variants}
								initial='initial'
								animate='animate'
							>
								<Link href={url}>{name}</Link>
							</motion.li>
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
			<motion.div
				initial='closed'
				animate={showMenu ? 'opened' : 'closed'}
				className={`${styles.nav_mobile} ${showMenu && styles.active}`}
			>
				<motion.ol variants={olVariant}>
					{navLinks &&
						navLinks.map(({ url, name }, i) => (
							<motion.li
								key={i}
								variants={liVariant}
								onClick={() => {
									setShowMenu(false);
									handleCheckedStatus();
								}}
							>
								<Link href={url}>{name}</Link>
							</motion.li>
						))}
				</motion.ol>
				<motion.a
					variants={aVariant}
					className={styles.btn}
					href='#'
					rel='noopener noreferrer'
				>
					Resume
				</motion.a>
			</motion.div>
		</div>
	);
};

export default Header;
