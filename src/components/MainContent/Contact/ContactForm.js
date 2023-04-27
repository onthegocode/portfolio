import MainBtn from "../../Buttons/MainBtn";
import ContactInput from "./ContactInput";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<form className={styles.contactForm}>
			<div className={styles.contactForm__container}>
				<div className={styles["contactForm-1"]}>
					<ContactInput text="Name" type="text" formFor="name" />
					<ContactInput text="Email" type="email" formFor="email" />
				</div>
				<div>
					<ContactInput text="Subject" type="text" formFor="subject" />
				</div>
				<div className={styles.textarea}>
					<textarea for="message" placeholder="Message"></textarea>
					<label id="message" name="message"></label>
				</div>
			</div>
			<button type="submit" className={styles.submit}>
				<MainBtn
					className={styles.btn}
					text="Send message!"
					btn1Color="btn1ColorRed"
					btn2Color="btn1ColorBlue"
				/>
			</button>
		</form>
	);
};
export default ContactForm;
