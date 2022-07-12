/* eslint-disable react/no-unescaped-entities */
import Icon from '@/components/icons/icon';
import styles from '@/styles/Contact.module.scss';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		subject: '',
		email: '',
		message: '',
	});
	const [messageSent, setMessageSent] = useState(false);

	const { firstName, lastName, subject, email, message } = formData;

	const formRef = useRef();

	const onChange = e => {
		setFormData(prevState => ({
			...prevState,
			[e.target.id]: e.target.value,
		}));
	};

	const onSubmit = async e => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				formRef.current,
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			)
			.then(
				result => {
					result.text === 'OK' && setMessageSent(true);
				},
				error => {
					console.log(error.text);
					setMessageSent(false);
				}
			);
	};

	return (
		<motion.div
			initial={{ y: 100, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: 'true', amount: 'some' }}
			transition={{ duration: 1.2 }}
			className={styles.contact}
			id='contact'
		>
			<h1>
				<Icon name='caretR' />
				Contact
				<motion.span
					initial={{ x: 20, opacity: 0 }}
					whileInView={{ x: 0, opacity: 1 }}
					viewport={{ once: 'true', amount: 'some' }}
					transition={{ duration: 1.2 }}
				>
					Get in touch! I'll get back to you as soon as possible!
				</motion.span>
			</h1>
			<div className={styles.contactForm}>
				{!messageSent ? (
					<form ref={formRef} onSubmit={onSubmit}>
						<div className={styles.name_section}>
							<div className={styles.formControl}>
								<input
									type='text'
									id='firstName'
									name='user_name'
									onChange={onChange}
									value={firstName}
									required
								/>
								<label htmlFor='first-name'>Fist Name</label>
							</div>
							<div className={styles.formControl}>
								<input
									type='text'
									id='lastName'
									name='user_last_name'
									onChange={onChange}
									value={lastName}
									required
								/>
								<label htmlFor='last-name'>Last Name</label>
							</div>
						</div>

						<div className={styles.formControl}>
							<input
								type='email'
								id='email'
								name='user_email'
								onChange={onChange}
								value={email}
								required
							/>
							<label htmlFor='email'>E-mail</label>
						</div>
						<div className={styles.formControl}>
							<input
								type='text'
								id='subject'
								name='subject'
								onChange={onChange}
								value={subject}
								required
							/>
							<label htmlFor='number'>Subject</label>
						</div>
						<div className={styles.formControl}>
							<textarea
								id='message'
								name='message'
								onChange={onChange}
								value={message}
								required
								rows={5}
								cols={30}
							/>
							<label htmlFor='message'>Message</label>
						</div>
						<input type='submit' value='Send' />
					</form>
				) : (
					<div className={styles.messageSent}>
						<p>Your Message was sent!</p>
						<p>I'll get back to you shortly =)</p>
					</div>
				)}
			</div>
		</motion.div>
	);
};

export default Contact;
