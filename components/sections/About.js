import styles from '@/styles/About.module.scss';

const About = () => {
	return (
		<div id='about' className={styles.about}>
			<h1>About Me</h1>
			<div className={styles.about_grid}>
				<p className={styles.about_text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
					adipisci, laboriosam quasi fugiat deserunt praesentium error minima.
					Tenetur rem et accusamus consequatur nisi. Praesentium ex quo magnam,
					quaerat magni vero iusto nesciunt iste voluptate exercitationem
					blanditiis facere officiis! Aspernatur eius facere temporibus nemo.
				</p>
				<div className={styles.carousel}>
					<p>carousel</p>
				</div>
			</div>
		</div>
	);
};

export default About;
