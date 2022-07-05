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

const Icon = ({ name }) => {
	switch (name) {
		case 'Instagram':
			return <FaInstagram className={styles.icon} />;
		case 'Twitter':
			return <FaTwitter className={styles.icon} />;
		case 'Github':
			return <FaGithub className={styles.icon} />;
		case 'Linkedin':
			return <FaLinkedin className={styles.icon} />;
		case 'Git':
			return <FaGitAlt className={styles.icon} />;
		case 'Html5':
			return <FaHtml5 className={styles.icon} />;
		case 'Css':
			return <FaCss3 className={styles.icon} />;
		case 'Sass':
			return <FaSass className={styles.icon} />;
		case 'Javascript':
			return <IoLogoJavascript className={styles.icon} />;
		case 'React':
			return <FaReact className={styles.icon} />;
		case 'Next':
			return <TbBrandNextjs className={styles.icon} />;
		case 'Node':
			return <FaNodeJs className={styles.icon} />;
		case 'Styled':
			return <SiStyledcomponents className={styles.icon} />;
		case 'Mongodb':
			return <SiMongodb className={styles.icon} />;
		case 'Heroku':
			return <SiHeroku className={styles.icon} />;
		case 'Redux':
			return <SiRedux className={styles.icon} />;
		case 'Express':
			return <SiExpress className={styles.icon} />;
		case 'Postman':
			return <SiPostman className={styles.icon} />;
		case 'caretR':
			return <BsCaretRight className={styles.caretR} />;
		default:
			return <FaInstagram />;
	}
};

export default Icon;
