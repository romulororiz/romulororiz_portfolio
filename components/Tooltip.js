import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import styles from '@/styles/Tooltip.module.scss';

const Tooltip = ({ name, children }) => {
	return (
		<Tippy
			animation='scale'
			theme='default'
			className={styles.tooltip}
			content={name}
			arrow={true}
		>
			{children}
		</Tippy>
	);
};

export default Tooltip;
