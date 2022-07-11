import styles from '@/styles/Project.module.scss';
import Image from '@/components/Image';
import Icon from '@/components/icons/icon';

const Project = ({ name, description, url, repository, image, stack }) => {
	return (
		<div className={styles.project_wrapper}>
			<div className={styles.project_image_wrapper}>
				<Image src={image} width={650} height={500} alt={''} />
			</div>
			<div className={styles.project_content}>
				<a href={url} target='_blank' rel='noopener noreferrer'>
					<Icon name='External' />
				</a>
				<a href={repository} target='_blank' rel='noopener noreferrer'>
					<Icon name='Github' />
				</a>
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
