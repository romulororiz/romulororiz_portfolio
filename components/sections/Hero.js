/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/Hero.module.scss';
import { AnimatePresence, motion } from 'framer-motion';
const itemOne = <h1>Hi there, my name is</h1>;
const itemTwo = <h2>Romulo Roriz</h2>;
const itemThree = (
	<h2 className={styles.heading}>
		I Love <span>Bringing Ideas</span> To Life
	</h2>
);
const itemFour = (
	<p>
		I'm a self-taught Web Developer walking the never ending learning path of
		Web Development. I love building fully responsive user-friendly websites
		with proven design patterns combined with the latest technologies out there.
	</p>
);

const heroItems = [itemOne, itemTwo, itemThree, itemFour];

const variants = {
	initial: { opacity: 0, y: '100%' },
	animate: i => ({
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: i * 0.2,
		},
	}),
};

const Hero = () => {
	//todo use windowSize hook for mobile value

	return (
		<div className={styles.hero}>
			{heroItems.map((item, i) => (
				<motion.div
					key={i}
					custom={i}
					variants={variants}
					initial='initial'
					animate='animate'
				>
					{item}
				</motion.div>
			))}
		</div>
	);
};

export default Hero;
