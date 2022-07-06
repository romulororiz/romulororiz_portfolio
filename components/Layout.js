import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import styles from '@/styles/Layout.module.scss';
import Social from './Social';

export const Layout = ({ title, description, keywords, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<Social />
			<div className={styles.content}>{children}</div>
			<Footer />
		</>
	);
};

Layout.defaultProps = {
	title: 'Rômulo Roriz',
	description: 'Personal Website',
	keywords: 'Web Development, Frontend, Javascript, HTML5, CSS, Sass, NextJs',
};
