import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

export const Layout = ({ title, description, keywords, children }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<meta name='keywords' content={keywords} />
			</Head>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};
