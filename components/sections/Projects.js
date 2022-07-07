import styles from '@/styles/Projects.module.scss';
import Icon from '@/components/icons/icon';
import { projects } from '@/config/index';
import Project from '@/components/Project';

const Projects = () => {
	return (
		<div className={styles.projects} id='projects'>
			<h1>
				<Icon name='caretR' />
				Projects
			</h1>
			{projects.map(({ id, name, description, url, image, stack }, i) => (
				<Project
					key={i}
					id={id}
					name={name}
					description={description}
					url={url}
					image={image}
					stack={stack}
				/>
			))}
		</div>
	);
};

export default Projects;
