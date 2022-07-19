import styles from '@/styles/Skills.module.scss';
import Icon from '@/components/icons/icon';
import { icons } from '@/config/index';
import Tooltip from '@/components/Tooltip';
import ProgressBar from '@/components/ProgressBar';
import { motion } from 'framer-motion';

const Skills = () => {
	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: 'true', amount: 'some' }}
			transition={{ duration: 1.2 }}
			className={styles.skills}
			id='tech-stack'
		>
			<h1>
				<Icon name='caretR' />
				Tech Stack
				<motion.span
					initial={{ x: 20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: 'true', amount: 'some' }}
					transition={{ duration: 1.2 }}
				>
					Some of the technologies I have been messing around with
				</motion.span>
			</h1>
			<div className={styles.icons_grid}>
				{icons.map(({ name, percentage }, i) => (
					<div className={styles.icon_wrapper} key={i}>
						<Tooltip name={name}>
							<span>
								<Icon name={name} />
								{/* <ProgressBar percentage={percentage} />{' '} */}
							</span>
						</Tooltip>
					</div>
				))}
			</div>
		</motion.div>
	);
};

export default Skills;
