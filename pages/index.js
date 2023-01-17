import { Layout } from '@/components/Layout';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import styles from '@/styles/Home.module.scss';
import ScrollTop from '@/components/ScrollTop';
import { useEffect, useState } from 'react';
import Spinner from '@/components/Spinner';

const Home = () => {
	return (
		<Layout title='Romulo Roriz'>
			<main className={styles.main}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
				<ScrollTop />
			</main>
		</Layout>
	);
};

export default Home;
