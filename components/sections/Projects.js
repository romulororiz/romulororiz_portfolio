import styles from '@/styles/Projects.module.scss';
import Icon from '@/components/icons/icon';
import useEmblaCarousel from 'embla-carousel-react';
import { projects } from '@/config/index';
import Project from '@/components/Project';
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import { disablePrevNextBtns, setupPrevNextBtns } from '@/utils/emblaConf';
import DotBtn from '@/components/DotBtn';
import { useCallback, useEffect, useState } from 'react';

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
		<div className={styles.projects} id='projects'>
			<h1>
				<Icon name='caretR' />
				Projects
				<span>Some of my latest projects and technologies used in each of them</span>
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
		</div>
	);
};

export default Projects;
