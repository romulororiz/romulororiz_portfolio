import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import Image from '@/components/Image';
import { slides, about } from '@/config/index';
import { disablePrevNextBtns, setupPrevNextBtns } from '@/utils/emblaConf';
import DotBtn from '@/components/DotBtn';
import styles from '@/styles/About.module.scss';
import Icon from '@/components/icons/icon';

const About = () => {
	const [slideOne, setSlideOne] = useState(true);
	const [slideTwo, setSlideTwo] = useState(false);
	const [slideThree, setSlideThree] = useState(false);
	const [slideFour, setSlideFour] = useState(false);
	const [slideFive, setSlideFive] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);
	// const [windowDimension, setWindowDimension] = useState(0);
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

	useEffect(() => {
		if (!emblaApi) return;

		emblaApi.on('select', () => {
			const slideInView = emblaApi.slidesInView(true)[0];
			switch (slideInView) {
				case 0:
					setSlideOne(true);
					setSlideTwo(false);
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

		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	// Handle Scroll
	const { scrollNext, scrollPrev } = setupPrevNextBtns(emblaApi);

	// Handle disable next / prev buttons
	const { canScrollNext, canScrollPrev } = disablePrevNextBtns(emblaApi);

	return (
		<div id='about' className={styles.about}>
			<h1>
				<Icon name='caretR' />
				About Me
			</h1>
			<div className={styles.about_grid}>
				<p className={styles.about_text}>
					{slideOne
						? about[0].text
						: slideTwo
						? about[1].text
						: slideThree
						? about[2].text
						: slideFour
						? about[3].text
						: slideFive
						? about[4].text
						: ''}
				</p>
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
		</div>
	);
};

export default About;
