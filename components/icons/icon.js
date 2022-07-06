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
import Tooltip from '../Tooltip';

const Icon = ({ name }) => {
	switch (name) {
		case 'Instagram':
			return <FaInstagram className={styles.icon} />;
		case 'Twitter':
			return <FaTwitter className={styles.icon} />;
		case 'Github':
			return (
				<Tooltip name={name}>
					<a>
						<FaGithub className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Linkedin':
			return <FaLinkedin className={styles.icon} />;
		case 'Git':
			return (
				<Tooltip name={name}>
					<a>
						<FaGitAlt className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Html5':
			return (
				<Tooltip name={name}>
					<a>
						<FaHtml5 className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Css3':
			return (
				<Tooltip name={name}>
					<a>
						<FaCss3 className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Sass':
			return (
				<Tooltip name={name}>
					<a>
						<FaSass className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Javascript':
			return (
				<Tooltip name={name}>
					<a>
						<IoLogoJavascript className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'React':
			return (
				<Tooltip name={name}>
					<a>
						<FaReact className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'NextJs':
			return (
				<Tooltip name={name}>
					<a>
						<TbBrandNextjs className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'NodeJs':
			return (
				<Tooltip name={name}>
					<a>
						<FaNodeJs className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Styled Components':
			return (
				<Tooltip name={name}>
					<a>
						<SiStyledcomponents className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Mongodb':
			return (
				<Tooltip name={name}>
					<a>
						<SiMongodb className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Heroku':
			return (
				<Tooltip name={name}>
					<a>
						<SiHeroku className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Redux':
			return (
				<Tooltip name={name}>
					<a>
						<SiRedux className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Express':
			return (
				<Tooltip name={name}>
					<a>
						<SiExpress className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'Postman':
			return (
				<Tooltip name={name}>
					<a>
						<SiPostman className={styles.icon} />
					</a>
				</Tooltip>
			);
		case 'caretR':
			return <BsCaretRight className={styles.caretR} />;
		default:
			return <FaInstagram />;
	}
};

export default Icon;
