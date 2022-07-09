import styles from '@/styles/Skills.module.scss';
import Icon from '@/components/icons/icon';
import { icons } from '@/config/index';
import Tooltip from '@/components/Tooltip';

const Skills = () => {
	return (
		<div className={styles.skills} id='tech-stack'>
			<h1>
				<Icon name='caretR' />
				Tech Stack
			</h1>
			<div className={styles.icons_grid}>
				{icons.map((icon, i) => (
					<Tooltip key={i} name={icon.name}>
						<span>
							<Icon name={icon.name} />
						</span>
					</Tooltip>
				))}
			</div>
		</div>
	);
};

export default Skills;
