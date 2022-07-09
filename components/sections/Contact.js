import Icon from '@/components/icons/icon';
import styles from '@/styles/Contact.module.scss';

const Contact = () => {
	return (
		<div className={styles.contact} id='contact'>
			<h1>
				<Icon name='caretR' />
				Contact
			</h1>
		</div>
	);
};

export default Contact;
