import MainBtn from "../../Buttons/MainBtn";
import styles from "./AboutKnowme.module.css";

const AboutKnowme = () => {
	return (
		<div className={styles.aboutKnowMe}>
			<h3 className={styles["aboutKnowMe-h3"]}>Get to know me!</h3>
			<p className={styles["aboutKnowMe-p"]}>
				Hi! My name is Andrew, and I’m a software engineer primarily focusing on
				Frontend Development. My interest in web development started in 2015
				when I picked up my first book called “HTML and CSS: Design and Build
				Websites”, building static websites to show family and friends.
				<br />
				<br />
				Year’s later, I became a freelancer developer working with many clients
				ranging from email signature development to building full-scale websites
				and even payment processing systems. I learned how to design and develop
				solutions that met client goals for over 2+ years. I learned how to be
				flexible and learn new things on the go.
			</p>
			<MainBtn
				text="Contact"
				link="mailto:andrew@onthegocode.com"
				btn1Color="btn1ColorRed"
				btn2Color="btn1ColorBlue"
			/>
		</div>
	);
};

export default AboutKnowme;
