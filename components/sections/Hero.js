/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/Hero.module.scss';
import { motion } from 'framer-motion';
import useWindowSize from 'hooks/useWindowSize';
import { useEffect, useState } from 'react';
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

const Hero = () => {
	//todo use windowSize hook for mobile value

	return (
		<div className={styles.hero}>
			{heroItems.map((item, i) => (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1, duration: 0.7 }}
					key={i}
				>
					{item}
				</motion.div>
			))}
		</div>
	);
};

export default Hero;
