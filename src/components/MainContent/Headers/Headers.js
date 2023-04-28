import styles from "./Headers.module.css";

const Headers = ({ title, text, color }) => {
	return (
		<section className={`${styles.headers}`}>
			<div className={styles["headers--head"]}>
				<h2 className={styles["headers--h2"]}>{title}</h2>
				<span
					className={`${styles["headers--underscore"]} ${styles[color]}`}></span>
			</div>
			<p className={styles["headers--p"]}>{text}</p>
		</section>
	);
};

export default Headers;
