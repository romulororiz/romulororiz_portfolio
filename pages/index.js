import { Layout } from '@/components/Layout';
import Hero from '@/components/sections/Hero';
import styles from '@/styles/Home.module.scss';

const Home = () => {
	return (
		<Layout>
			<main className={`${styles.main}`}>
				<Hero />
			</main>
		</Layout>
	);
};

export default Home;
