import Headers from "../Headers/Headers";
import styles from "./About.module.css";
import AboutMain from "./AboutMain";

const About = () => {
	return (
		<section className={styles.about}>
			<Headers
				title="About Me"
				text="A software engineer who’s up to any challenge he faces and can learn anything with adequate time."
				color="blueU"
			/>
			<AboutMain />
		</section>
	);
};

export default About;
