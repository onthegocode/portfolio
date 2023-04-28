import gsap from "gsap";
import styles from "./Headers.module.css";

let tl = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });
tl.from(`.${styles["headers--h2"]}`, {
	opacity: 0,
	y: 50,
	duration: 1.6,
})
	.from(
		`.${styles["headers--underscore"]}`,
		{
			opacity: 0,
			duration: 2,
		},
		"<.4"
	)
	.from(
		`.${styles["headers--p"]}`,
		{
			opacity: 0,
			duration: 2,
		},
		"<.4"
	);
const Headers = ({ title, text, color }) => {
	return (
		<section className={styles.headers}>
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
