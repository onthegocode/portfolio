import Headers from "../Headers/Headers";
import styles from "./About.module.css";
import AboutMain from "./AboutMain";
import Sections from "../../Sections/Sections";

const About = () => {
	return (
		<Sections id="about" className={`${styles.about} greyed`}>
			<Headers
				title="About Me"
				text="A software engineer who’s up to any challenge he faces and can learn anything with adequate time."
				color="blueU"
			/>
			<AboutMain />
		</Sections>
	);
};

export default About;