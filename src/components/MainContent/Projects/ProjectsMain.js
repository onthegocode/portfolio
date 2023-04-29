import ProjectCard from "./ProjectCards/ProjectCard";
import styles from "./ProjectsMain.module.css";
import "./ProjectsMain.css";

const ProjectsMain = ({ show }) => {
	return (
		<section className={styles.projectsMain}>
			<ProjectCard
				type="Client Project"
				head="Typkup"
				text="Ecommerce Website"
				link="#"
				img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
				alt="ManCaveGamez"
			/>
			<ProjectCard
				type="Client Project"
				head="ManCaveGamez"
				text="Ecommerce Sports Website"
				link="#"
				img="https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg"
				alt="ManCaveGamez"
			/>
			<ProjectCard
				type="Client Project"
				head="OccFit Solutions"
				text="Medical Footwear Ecommerce Website"
				link="#"
				img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
				alt="ManCaveGamez"
			/>
			<ProjectCard
				type="Client Project"
				head="EcoTwist"
				text="Ecommerce Detergent Website"
				link="#"
				img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
				alt="ManCaveGamez"
			/>
			<ProjectCard
				type="Course Project"
				head="Mapty"
				text="Hiking/Cycling tracker"
				link="#"
				img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
				alt="ManCaveGamez"
			/>
			<ProjectCard
				type="Client Project"
				head="iFrame Wrapper"
				text="Payment Processing iFrame Wrapper"
				link="#"
				img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
				alt="ManCaveGamez"
			/>
			{show && [
				<ProjectCard
					head="Odor Release Technology"
					text=""
					link="#"
					img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
					alt="ManCaveGamez"
				/>,
				<ProjectCard
					head="ManCaveGamez"
					text=""
					link="#"
					img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
					alt="ManCaveGamez"
				/>,
				<ProjectCard
					head="ManCaveGamez"
					text=""
					link="#"
					img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
					alt="ManCaveGamez"
				/>,
				<ProjectCard
					head="ManCaveGamez"
					text=""
					link="#"
					img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
					alt="ManCaveGamez"
				/>,
				<ProjectCard
					head="ManCaveGamez"
					text=""
					link="#"
					img="https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg"
					alt="ManCaveGamez"
				/>,
			]}
		</section>
	);
};
export default ProjectsMain;
