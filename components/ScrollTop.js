import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import styles from '@/styles/ScrollTop.module.scss';
import { AnimatePresence, motion } from 'framer-motion';

const ScrollTop = () => {
	const [showGoTop, setShowGoTop] = useState(false);
	const [btnStyle, setBtnStyle] = useState(styles.scrollTopHidden);

	// Scroll to top
	const scrollToTop = () => {
		if (typeof window !== 'undefined') {
			window.scroll({ top: 0, left: 0, behavior: 'smooth' });
		}
	};

	// Show Button when reached a certain amount of pixels
	const handleVisible = () => {
		if (typeof window !== 'undefined') {
			// returns a boolean
			setShowGoTop(window.scrollY > 500);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', handleVisible);
		}

		if (window.scrollY > 500) {
			setShowGoTop(true);
		}

		if (showGoTop) {
			setBtnStyle(styles.scrollTop);
		} else {
			setBtnStyle(styles.scrollTopHidden);
		}
	}, [showGoTop]);

	const variants = {
		initial: { opacity: 0 },
		animate: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
		exit: {
			opacity: 0,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<>
			<AnimatePresence>
				{showGoTop && (
					<motion.button
						variants={variants}
						initial='initial'
						animate='animate'
						exit='exit'
						className={btnStyle}
						onClick={() => scrollToTop()}
					>
						<FaChevronUp className={styles.icon} />
					</motion.button>
				)}
			</AnimatePresence>
		</>
	);
};

export default ScrollTop;
