import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from '@/styles/About.module.scss';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import Image from '../Image';
import { slides } from '@config';

const About = () => {
	const [slideOne, setSlideOne] = useState(false);
	const [slideTwo, setSlideTwo] = useState(false);
	const [slideThree, setSlideThree] = useState(false);
	const [slideFour, setSlideFour] = useState(false);
	const [slideFive, setSlideFive] = useState(false);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on('select', () => {
			const slideInView = emblaApi.slidesInView(true)[0];

			switch (slideInView) {
				case 0:
					setSlideOne(true);
					break;
				case 1:
					setSlideOne(false);
					setSlideTwo(true);
					break;
				case 2:
					setSlideTwo(false);
					setSlideThree(true);
					break;
				case 3:
					setSlideThree(false);
					setSlideFour(true);
					break;
				case 4:
					setSlideFour(false);
					setSlideFive(true);
					break;
				default:
					break;
			}
		});
	}, [emblaApi]);

	// Handle Scroll
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<div id='about' className={styles.about}>
			<h1>About Me</h1>
			<div className={styles.about_grid}>
				{slideOne ? (
					<p className={styles.about_text}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
						adipisci, laboriosam quasi fugiat deserunt praesentium error minima.
						Tenetur rem et accusamus consequatur nisi. Praesentium ex quo
						magnam, quaerat magni vero iusto nesciunt iste voluptate
						exercitationem blanditiis facere officiis! Aspernatur eius facere
						temporibus nemo.
					</p>
				) : slideTwo ? (
					<p className={styles.about_text}>
						Lorem ipsum dolor sit amet consectetur
					</p>
				) : slideThree ? (
					<p className={styles.about_text}>Lorem ipsum</p>
				) : slideFour ? (
					<p className={styles.about_text}>Lorem ipsum dolor sit amet</p>
				) : slideFive ? (
					<p className={styles.about_text}>É os guri</p>
				) : (
					'pqp'
				)}

				<div className={styles.carousel}>
					<div className={styles.carousel_viewport} ref={emblaRef}>
						<div className={styles.carousel_container}>
							{slides.map(({ src, width, height, alt }, i) => (
								<div key={i} className={styles.carousel_slide}>
									<Image src={src} width={width} height={height} alt={alt} />
								</div>
							))}
						</div>
					</div>
					<div className={styles.carousel_btns}>
						<a className={styles.embla_prev} onClick={scrollPrev}>
							<BsArrowLeftSquare
								className={`${styles.icon} ${styles.icon_left}`}
							/>
						</a>
						<a className={styles.embla_next} onClick={scrollNext}>
							<BsArrowRightSquare
								className={`${styles.icon} ${styles.icon_right}`}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
