import { Layout } from '@/components/Layout';
import About from 'sections/About';
import Contact from 'sections/Contact';
import Hero from 'sections/Hero';
import Projects from 'sections/Projects';
import Skills from 'sections/Skills';
import styles from '@/styles/Home.module.scss';

const Home = () => {
	return (
		<Layout title='Romulo Roriz'>
			<main className={styles.main}>
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</Layout>
	);
};

export default Home;
