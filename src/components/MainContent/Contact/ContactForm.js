import MainBtn from "../../Buttons/MainBtn";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
	return (
		<form className={styles.contactForm}>
			<div className={styles["contactForm-1"]}>
				<div>
					<input type="text" for="name" />
					<label id="name" name="name">
						Name
					</label>
				</div>
				<div>
					<input type="email" />
					<label>Email</label>
				</div>
			</div>
			<div>
				<input type="text" />
				<label>Subject</label>
			</div>
			<div>
				<input type="text" />
				<textarea placeholder="Message"></textarea>
			</div>
			<button>
				<MainBtn
					className={styles.btn}
					text="Show More"
					link="#GetInTouch"
					btn1Color="btn1ColorRed"
					btn2Color="btn1ColorBlue"
					align="btnCenter"
				/>
			</button>
		</form>
	);
};
export default ContactForm;
