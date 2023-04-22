import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles["footer__container"]}>
				<section>Year</section>
				<section>Social</section>
				<section>Built by Andrew Rivera</section>
			</div>
		</footer>
	);
};

export default Footer;
