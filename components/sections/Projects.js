import styles from '@/styles/Projects.module.scss';
import Icon from '../icons/icon';

const Projects = () => {
	return (
		<div className={styles.projects} id='projects'>
			<h1>
				<Icon name='caretR' />
				Projects
			</h1>
			<div></div>
		</div>
	);
};

export default Projects;
