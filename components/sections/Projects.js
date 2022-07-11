import styles from '@/styles/Projects.module.scss';
import Icon from '@/components/icons/icon';
import useEmblaCarousel from 'embla-carousel-react';
import { projects } from '@/config/index';
import Project from '@/components/Project';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { disablePrevNextBtns, setupPrevNextBtns } from '@/utils/emblaConf';
import DotBtn from '@/components/DotBtn';
import { useCallback, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
	const [scrollSnaps, setScrollSnaps] = useState([]);
	const [selectedIndex, setSelectedIndex] = useState(0);
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

		setScrollSnaps(emblaApi.scrollSnapList());
		emblaApi.on('select', onSelect);
	}, [emblaApi, onSelect]);

	// Handle Scroll
	const { scrollNext, scrollPrev } = setupPrevNextBtns(emblaApi);

	// Handle disable next / prev buttons
	const { canScrollNext, canScrollPrev } = disablePrevNextBtns(emblaApi);

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: 'true', amount: 'some' }}
			transition={{ duration: 1.2 }}
			className={styles.projects}
			id='projects'
		>
			<h1>
				<Icon name='caretR' />
				Projects
				<motion.span
					initial={{ x: 100, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: 'true', amount: 'some' }}
					transition={{ duration: 1.2 }}
				>
					Some of my latest projects and technologies used in each of them
				</motion.span>
			</h1>
			<div className={styles.carousel}>
				<div className={styles.carousel_viewport} ref={emblaRef}>
					<div className={styles.carousel_container}>
						{projects.map(
							({ id, name, description, url, repository, image, stack }, i) => (
								<div key={i} className={styles.carousel_slide}>
									<Project
										id={id}
										name={name}
										description={description}
										url={url}
										repository={repository}
										image={image}
										stack={stack}
									/>
								</div>
							)
						)}
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
		</motion.div>
	);
};

export default Projects;
