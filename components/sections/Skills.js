import styles from '@/styles/Skills.module.scss';
import Icon from '@/components/icons/icon';
import { icons } from '@/config/index';
import Tooltip from '@/components/Tooltip';
import ProgressBar from '../ProgressBar';

const Skills = () => {
	return (
		<div className={styles.skills} id='tech-stack'>
			<h1>
				<Icon name='caretR' />
				Tech Stack
				<span>Some of the technologies I have been messing around with</span>
			</h1>
			<div className={styles.icons_grid}>
				{icons.map(({ name, percentage }, i) => (
					<div className={styles.icon_wrapper} key={i}>
						<Tooltip name={name}>
							<span>
								<Icon name={name} />
								<ProgressBar percentage={percentage} />{' '}
							</span>
						</Tooltip>
					</div>
				))}
			</div>
		</div>
	);
};

export default Skills;
