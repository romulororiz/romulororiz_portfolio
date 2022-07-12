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
				<link rel='shortcut icon' href='/favicon.ico' />
				<link
					rel='apple-touch-icon'
					sizes='180x180'
					href='/apple-touch-icon.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='32x32'
					href='/favicon-32x32.png'
				/>
				<link
					rel='icon'
					type='image/png'
					sizes='16x16'
					href='/favicon-16x16.png'
				/>
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
	description: 'My Personal Portfolio Website',
	keywords: 'Web Development, Frontend, Javascript, HTML5, CSS, Sass, NextJs',
};
