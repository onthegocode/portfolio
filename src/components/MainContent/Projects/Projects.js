import Headers from "../Headers/Headers";
import ProjectsMain from "./ProjectsMain";
import MainBtn from "../../Buttons/MainBtn";
import styles from "./Projects.module.css";
const Projects = () => {
	return (
		<section className={styles.projects}>
			<Headers
				title="Projects"
				text="Here are a couple of projects I have worked."
				color="redU"
			/>
			<ProjectsMain />
			<MainBtn
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
