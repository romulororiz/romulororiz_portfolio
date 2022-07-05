import {
	FaInstagram,
	FaTwitter,
	FaLinkedin,
	FaGithub,
	FaGit,
	FaHtml5,
	FaSass,
	FaCss3,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { IoLogoJavascript, IoLogoVercel } from 'react-icons/io';
import {
	SiStyledcomponents,
	SiMongodb,
	SiHeroku,
	SiRedux,
	SiExpress,
} from 'react-icons/si';
import { BsCaretRight } from 'react-icons/bs';
import styles from '@/styles/Icon.module.scss';

const Icon = ({ name }) => {
	switch (name) {
		case 'Instagram':
			return <FaInstagram />;
		case 'Twitter':
			return <FaTwitter />;
		case 'Github':
			return <FaGithub />;
		case 'Linkedin':
			return <FaLinkedin />;
		case 'Git':
			return <FaGit />;
		case 'Html5':
			return <FaHtml5 />;
		case 'Css':
			return <FaCss3 />;
		case 'Sass':
			return <FaSass />;
		case 'Javascript':
			return <IoLogoJavascript />;
		case 'React':
			return <FaReact />;
		case 'Next':
			return <TbBrandNextjs />;
		case 'Node':
			return <FaNodeJs />;
		case 'Vercel':
			return <IoLogoVercel />;
		case 'Styled':
			return <SiStyledcomponents />;
		case 'Mongodb':
			return <SiMongodb />;
		case 'Heroku':
			return <SiHeroku />;
		case 'Redux':
			return <SiRedux />;
		case 'Express':
			return <SiExpress />;
		case 'caretR':
			return <BsCaretRight className={styles.caretR} />;
		default:
			return <FaInstagram />;
	}
};

export default Icon;
