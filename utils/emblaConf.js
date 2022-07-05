/* eslint-disable react-hooks/rules-of-hooks */
import { useCallback } from 'react';

// Prev and Next Btns
export const setupPrevNextBtns = emblaApi => {
	const scrollPrev = useCallback(() => {
		if (emblaApi) emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (emblaApi) emblaApi.scrollNext();
	}, [emblaApi]);

	return { scrollNext, scrollPrev };
};

// Handle Disabled Btns
export const disablePrevNextBtns = emblaApi => {
	const canScrollPrev = emblaApi && emblaApi.canScrollPrev();
	const canScrollNext = emblaApi && emblaApi.canScrollNext();

	return { canScrollNext, canScrollPrev };
};
