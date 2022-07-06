import styles from '@/styles/Skills.module.scss';
import Icon from '@/components/icons/icon';
import { icons } from '@/config/index';

const Skills = () => {
	return (
		<div className={styles.skills} id='tech-stack'>
			<h1>
				<Icon name='caretR' />
				Tech Stack
			</h1>
			<div className={styles.icons_grid}>
				{icons.map((icon, i) => (
					<Icon key={i} name={icon.name} />
				))}
			</div>
		</div>
	);
};

export default Skills;
