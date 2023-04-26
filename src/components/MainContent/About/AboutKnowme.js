import MainBtn from "../../Buttons/MainBtn";
import styles from "./AboutKnowme.module.css";

const AboutKnowme = () => {
	return (
		<div className={styles.aboutKnowMe}>
			<h3 className={styles["aboutKnowMe-h3"]}>Get to know me!</h3>
			<p className={styles["aboutKnowMe-p"]}>
				Hey! My name is Andrew and I’m a software engineer primarily focusing on
				Frontend Development. My interest in web development started back in
				2015 where I picked up my first book called “HTML and CSS: Design and
				Build Websites”, Building out fun websites that me and my friends could
				enjoy. <br />
				<br />
				Year’s later I became a freelancer developer working with many different
				client requirements such as custom websites and applications. I learned
				how to design and develop solutions for client goals, for over 2 years
				building up my experience. I learned how to be flexible and willing to
				learn new things on the go, along with managing my time.
			</p>
			<MainBtn
				text="Contact"
				link="#GetInTouch"
				btn1Color="btn1ColorRed"
				btn2Color="btn1ColorBlue"
			/>
		</div>
	);
};

export default AboutKnowme;
