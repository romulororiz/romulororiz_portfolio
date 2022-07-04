import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import emblaCarouselReact from 'embla-carousel-react';
import styles from '@/styles/About.module.scss';

const About = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	useEffect(() => {
		if (emblaApi) {
		}
	}, [emblaApi]);

	// Grab wrapper nodes
	const rootNode = document.querySelector(styles.carousel);
	const viewportNode = document.querySelector(styles.carousel_viewport);
	const embla = emblaCarouselReact(rootNode);

	// Grab button nodes
	const prevButtonNode = rootNode.querySelector(styles.embla_prev);
	const nextButtonNode = rootNode.querySelector(styles.embla_next);

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
				<div className={styles.carousel} ref={emblaRef}>
					<div className={styles.carousel_viewport}>
						<div className={styles.carousel_container}>
							<div className={styles.carousel_slide}>Slide 1</div>
							<div className={styles.carousel_slide}>Slide 2</div>
							<div className={styles.carousel_slide}>Slide 3</div>
						</div>
					</div>
					<button className={styles.embla_prev}>Prev</button>
					<button className={styles.embla_next}>Next</button>
				</div>
			</div>
		</div>
	);
};

export default About;
