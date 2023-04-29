import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import Headers from "../Headers/Headers";
import styles from "./About.module.css";
import AboutMain from "./AboutMain";
import Sections from "../../Sections/Sections";

const About = () => {
	const options = {
		threshold: 1,
	};
	const { ref: myRef, inView: myElementIsVisible } = useInView(options);

	return (
		<Sections id="about" className={`${styles.about} greyed`}>
			<div ref={myRef} className="mainSection">
				<h2>{myElementIsVisible ? "HELLO THERE" : "GOODBYE"}</h2>
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
