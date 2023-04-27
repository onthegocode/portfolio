import styles from "./ContactInput.module.css";

const ContactInput = ({ text, type, formFor }) => {
	return (
		<div className={styles.contactInput}>
			<input type={type} for={formFor} placeholder={text} required />
			<label id={formFor} name={formFor}></label>
		</div>
	);
};
export default ContactInput;
