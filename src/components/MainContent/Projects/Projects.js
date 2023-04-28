import React, { useState } from "react";
import Headers from "../Headers/Headers";
import ProjectsMain from "./ProjectsMain";
import MainBtn from "../../Buttons/MainBtn";
import Sections from "../../Sections/Sections";
import styles from "./Projects.module.css";
const Projects = () => {
	const [shows, setShows] = useState(false);
	const showClick = () => {
		setShows(!shows);
	};
	return (
		<Sections id="projects" className={styles.projects}>
			<Headers
				title="Projects"
				text="Here are a couple of projects I have worked."
				color="redU"
			/>
			<ProjectsMain show={shows} />
			<MainBtn
				onClick={showClick}
				text="Show More"
				link="#GetInTouch"
				btn1Color="btn2ColorRed"
				btn2Color="btn2ColorBlue"
				align="btnCenter"
			/>
		</Sections>
	);
};
export default Projects;
