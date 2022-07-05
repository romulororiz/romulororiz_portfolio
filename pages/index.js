import { Layout } from '@/components/Layout';
import About from '@/components/sections/About';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import styles from '@/styles/Home.module.scss';

const Home = () => {
	return (
		<Layout title='Romulo Roriz'>
			<main className={styles.main}>
				<Hero />
				<About />
				<Skills />
			</main>
		</Layout>
	);
};

export default Home;
