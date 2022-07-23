import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from '@/components/Image';
import { slides, about } from '@/config/index';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { disablePrevNextBtns, setupPrevNextBtns } from '@/utils/emblaConf';
import DotBtn from '@/components/DotBtn';
import styles from '@/styles/About.module.scss';
import Icon from '@/components/icons/icon';
import { motion } from 'framer-motion';

const About = () => {
	const [slideIndex, setSlideIndex] = useState(0);
	const [slideText, setSlideText] = useState('');
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

	// Carousel Dots
	const onSelect = useCallback(() => {
		if (!emblaApi) return;
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, [emblaApi]);

	const scrollTo = useCallback(
		index => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	// Check slide index and about me text index
	// and assign text with its respective slide
	useEffect(() => {
		const matchingTextIndex = about.filter((_, index) => index === slideIndex);

		if (emblaApi) {
			emblaApi.on('select', () => {
				setSlideIndex(emblaApi.slidesInView(true)[0]);
			});
		}

		setSlideText(matchingTextIndex[0].text);
	}, [emblaApi, slideIndex]);

	// Get scroll snaps for handling navigation with carousel dots
	useEffect(() => {
		if (!emblaApi) return;

		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	// Handle Prev and Next scrolls
	const { scrollNext, scrollPrev } = setupPrevNextBtns(emblaApi);

	// Handle disable next / prev buttons
	const { canScrollNext, canScrollPrev } = disablePrevNextBtns(emblaApi);

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: 'true', amount: 'some' }}
			transition={{ duration: 1.2 }}
			id='about'
			className={styles.about}
		>
			<h1>
				<Icon name='caretR' />
				About Me
				<motion.span
					initial={{ x: 20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: 'true', amount: 'some' }}
					transition={{ duration: 1.2 }}
				>
					Some facts about yours truly
				</motion.span>
			</h1>
			<div className={styles.about_grid}>
				<p className={styles.about_text}>{slideText}</p>
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
					{/* Btns */}
					<div className={styles.carousel_btns}>
						<a onClick={scrollPrev}>
							<BsArrowLeftSquare
								className={`${styles.icon} ${styles.icon_left} ${
									!canScrollPrev && styles.embla_prev_disabled
								}`}
							/>
						</a>
						<a onClick={scrollNext}>
							<BsArrowRightSquare
								className={`${styles.icon} ${styles.icon_right} ${
									!canScrollNext && styles.embla_next_disabled
								}`}
							/>
						</a>
					</div>
					{/* Dots */}
					<div className={styles.carousel_dots}>
						{scrollSnaps.map((_, index) => (
							<DotBtn
								key={index}
								selected={index === selectedIndex}
								onClick={() => scrollTo(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
