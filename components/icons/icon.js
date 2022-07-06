import {
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaGitAlt,
	FaHtml5,
	FaSass,
	FaCss3,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript } from 'react-icons/io';
import {
	SiStyledcomponents,
	SiMongodb,
	SiHeroku,
	SiRedux,
	SiExpress,
	SiPostman,
} from 'react-icons/si';
import { BsCaretRight } from 'react-icons/bs';
import styles from '@/styles/Icon.module.scss';
import Tooltip from '@/components/Tooltip';

const Icon = ({ name }) => {
	


	switch (name) {
		case 'Instagram':
			return <FaInstagram className={styles.icon} />;
		case 'Twitter':
			return <FaTwitter className={styles.icon} />;
		case 'Github':
			return (
				<Tooltip name={name}>
					<span>
						<FaGithub className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Linkedin':
			return <FaLinkedin className={styles.icon} />;
		case 'Git':
			return (
				<Tooltip name={name}>
					<span>
						<FaGitAlt className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Html5':
			return (
				<Tooltip name={name}>
					<span>
						<FaHtml5 className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Css3':
			return (
				<Tooltip name={name}>
					<span>
						<FaCss3 className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Sass':
			return (
				<Tooltip name={name}>
					<span>
						<FaSass className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Javascript':
			return (
				<Tooltip name={name}>
					<span>
						<IoLogoJavascript className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'React':
			return (
				<Tooltip name={name}>
					<span>
						<FaReact className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'NextJs':
			return (
				<Tooltip name={name}>
					<span>
						<TbBrandNextjs className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'NodeJs':
			return (
				<Tooltip name={name}>
					<span>
						<FaNodeJs className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Styled Components':
			return (
				<Tooltip name={name}>
					<span>
						<SiStyledcomponents className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Mongodb':
			return (
				<Tooltip name={name}>
					<span>
						<SiMongodb className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Heroku':
			return (
				<Tooltip name={name}>
					<span>
						<SiHeroku className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Redux':
			return (
				<Tooltip name={name}>
					<span>
						<SiRedux className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Express':
			return (
				<Tooltip name={name}>
					<span>
						<SiExpress className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'Postman':
			return (
				<Tooltip name={name}>
					<span>
						<SiPostman className={styles.icon} />
					</span>
				</Tooltip>
			);
		case 'caretR':
			return <BsCaretRight className={styles.caretR} />;
		default:
			return <FaInstagram />;
	}
};

export default Icon;
