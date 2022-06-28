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
				<meta
					name='google-site-verification'
					content='AIHkU7uwE26LtE6yMOkrFd9WMqwIGT9XLT1suf2Gfu8'
				/>
			</Head>
			<Header />
			<div>{children}</div>
			<Footer />
		</>
	);
};
