import MainBtn from "../../Buttons/MainBtn";
import ContactInput from "./ContactInput";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<form
			action="https://formsubmit.co/bb1384e991d958c76c3e5bc22885cc58"
			method="POST"
			className={styles.contactForm}>
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
