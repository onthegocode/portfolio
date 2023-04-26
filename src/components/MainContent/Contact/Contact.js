import Headers from "../Headers/Headers";
import ContactForm from "./ContactForm";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<section className={styles.contact}>
			<Headers
				title="Say Hello"
				text="Looking to onboard a web developer or need a freelance job done? Feel free to reach out even if its just to say hello, I’ll try my best to get back to you!"
				color="blueU"
			/>
			<ContactForm />
		</section>
	);
};
export default Contact;
