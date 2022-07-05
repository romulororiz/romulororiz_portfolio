import styles from '@/styles/DotBtn.module.scss';

const DotBtn = ({ selected, onClick }) => (
	<button
		className={`${styles.carousel_dot} ${selected && styles.is_selected}`}
		type='button'
		onClick={onClick}
	/>
);

export default DotBtn;
