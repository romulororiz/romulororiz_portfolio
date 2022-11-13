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
	FaAt,
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { FiExternalLink } from 'react-icons/fi';
import { IoLogoJavascript } from 'react-icons/io';
import {
	SiStyledcomponents,
	SiMongodb,
	SiHeroku,
	SiRedux,
	SiExpress,
	SiPostman,
	SiVercel,
	SiTailwindcss,
	SiGraphql,
} from 'react-icons/si';
import { BsCaretRight } from 'react-icons/bs';
import styles from '@/styles/Icon.module.scss';

const Icon = ({ name }) => {
	switch (name) {
		case 'Instagram':
			return <FaInstagram className={styles.social_icon} />;
		case 'Twitter':
			return <FaTwitter className={styles.social_icon} />;
		case 'Github':
			return <FaGithub className={styles.social_icon} />;
		case 'Linkedin':
			return <FaLinkedin className={styles.social_icon} />;
		case 'Git':
			return <FaGitAlt className={styles.icon} />;
		case 'Html5':
			return <FaHtml5 className={styles.icon} />;
		case 'Css3':
			return <FaCss3 className={styles.icon} />;
		case 'Sass':
			return <FaSass className={styles.icon} />;
		case 'Javascript':
			return <IoLogoJavascript className={styles.icon} />;
		case 'React':
			return <FaReact className={styles.icon} />;
		case 'NextJs':
			return <TbBrandNextjs className={styles.icon} />;
		case 'NodeJs':
			return <FaNodeJs className={styles.icon} />;
		case 'Styled Components':
			return <SiStyledcomponents className={styles.icon} />;
		case 'Mongodb':
			return <SiMongodb className={styles.icon} />;
		case 'Heroku':
			return <SiHeroku className={styles.icon} />;
		case 'Redux':
			return <SiRedux className={styles.icon} />;
		case 'Express':
			return <SiExpress className={styles.icon} />;
		case 'GraphQL':
			return <SiGraphql className={styles.icon} />;
		case 'Postman':
			return <SiPostman className={styles.icon} />;
		case 'Vercel':
			return <SiVercel className={styles.icon} />;
		case 'Tailwind':
			return <SiTailwindcss className={styles.icon} />;
		case 'Email':
			return <FaAt className={styles.social_icon} />;
		case 'External':
			return <FiExternalLink className={styles.social_icon} />;
		case 'caretR':
			return <BsCaretRight className={styles.caretR} />;
		default:
			return <FaInstagram />;
	}
};

export default Icon;
