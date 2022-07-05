/* eslint-disable react/no-unescaped-entities */
import styles from '@/styles/Hero.module.scss';

const itemOne = <h1>Hi, my name is</h1>;
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
	return (
		<div className={styles.hero}>
			{heroItems.map((item, i) => (
				<div key={i}>{item}</div>
			))}
		</div>
	);
};

export default Hero;
