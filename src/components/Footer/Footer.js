import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.footer__container}>
				<a
					href="mailto:andrew@onthegocode.com"
					className={styles["footer-link"]}>
					<p className={styles["footer-text"]}>
						Designed & Developed by <span>Andrew Rivera</span>
					</p>
				</a>
			</div>
		</footer>
	);
};

export default Footer;
