import styles from '@/styles/Project.module.scss';
import Image from 'components/Image';

const Project = ({ id, name, description, url, image, stack }) => {
	return (
		<div
			className={`${styles.project_wrapper} ${id % 2 === 0 && styles.reverse}`}
		>
			<div className={styles.project_image_wrapper}>
				<div className={styles.project_image}>
					<Image src={image} width={500} height={420} alt={''} />
				</div>
			</div>
			<div className={styles.project_content}>asdasd</div>
		</div>
	);
};

export default Project;
