import Headers from "../Headers/Headers";
// import ContactForm from "./ContactForm";
import MainBtn from "../../Buttons/MainBtn";
import Sections from "../../Sections/Sections";
import styles from "./Contact.module.css";

const Contact = () => {
	return (
		<Sections className={styles.contact}>
			<Headers
				title="Get In Touch"
				text="Looking to onboard a web developer or need a freelance job done? Feel free to reach out even if its just to say hello, I’ll try my best to get back to you!"
				color="blueU"
			/>
			<section>
				<MainBtn
					className={styles.btn}
					link="mailto:andrew@onthegocode.com"
					text="Say Hello!"
					btn1Color="btn1ColorRed"
					btn2Color="btn1ColorBlue"
				/>
			</section>
			{/* <ContactForm /> */}
		</Sections>
	);
};
export default Contact;
