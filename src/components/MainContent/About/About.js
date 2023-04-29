import Headers from "../Headers/Headers";
import styles from "./About.module.css";
import AboutMain from "./AboutMain";
import Sections from "../../Sections/Sections";
import { useInView } from "react-intersection-observer";

const About = ({ func }) => {
	const options = {
		threshold: 0.5,
	};
	const { ref: myRef, inView: isVisible } = useInView(options);
	func(isVisible);
	if (isVisible) {
		func(isVisible);
	}

	return (
		<Sections id="about" className={`${styles.about}`}>
			<div ref={myRef}>
				<Headers
					title="About Me"
					text="A software engineer who’s up to any challenge he faces and can learn anything with adequate time."
					color="blueU"
				/>
				<AboutMain />
			</div>
		</Sections>
	);
};

export default About;
