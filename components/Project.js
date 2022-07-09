import styles from '@/styles/Project.module.scss';
import Image from 'components/Image';

const Project = ({ name, description, url, image, stack }) => {
	return (
		<div className={styles.project_wrapper}>
			<div className={styles.project_image_wrapper}>
				<Image src={image} width={650} height={500} alt={''} />
			</div>
			<div className={styles.project_content}>
				<h2>{name}</h2>
				<div className={styles.description_wrapper}>
					<p>{description}</p>
					<div className={styles.stack}>
						{stack.map((item, i) => (
							<p key={i}>{item}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
