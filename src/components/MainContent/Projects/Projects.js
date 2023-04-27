import React, { useState } from "react";
import Headers from "../Headers/Headers";
import ProjectsMain from "./ProjectsMain";
import MainBtn from "../../Buttons/MainBtn";
import styles from "./Projects.module.css";
const Projects = () => {
	const [shows, setShows] = useState(false);
	const showClick = () => {
		setShows(!shows);
	};
	return (
		<section className={styles.projects}>
			<Headers
				title="Projects"
				text="Here are a couple of projects I have worked."
				color="redU"
			/>
			<ProjectsMain show={shows} />
			<MainBtn
				onClick={showClick}
				className={styles.btn}
				text="Show More"
				link="#GetInTouch"
				btn1Color="btn2ColorRed"
				btn2Color="btn2ColorBlue"
				align="btnCenter"
			/>
		</section>
	);
};
export default Projects;
