import ProjectCard from "./ProjectCards/ProjectCard";
import styles from "./ProjectsMain.module.css";
import "./ProjectsMain.css";

const ProjectsMain = ({ show, openModal, setOpenModal }) => {
	const modalHandler = (val) => {
		setOpenModal(!openModal);
	};
	const projects = [
		{
			type: "Client Project",
			head: "Typkup",
			text: "Ecommerce Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
		{
			type: "Client Project",
			head: "ManCaveGamez",
			text: "Ecommerce Sports Website",
			link: "#",
			img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg",
			alt: "ManCaveGamez",
		},
		{
			type: "Client Project",
			head: "OccFit Solutions",
			text: "Medical Footwear Ecommerce Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
		{
			type: "Client Project",
			head: "EcoTwist",
			text: "Ecommerce Detergent Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
		{
			type: "Course Project",
			head: "Mapty",
			text: "Hiking/Cycling tracker",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
		{
			type: "Client Project",
			head: "iFrame Wrapper",
			text: "Payment Processing iFrame Wrapper",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
	];
	const showProjects = [
		{
			type: "Client Project",
			head: "Odor Release Technology",
			text: "",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
		},
	];

	return (
		<section className={styles.projectsMain}>
			{projects.map((p) => (
				<ProjectCard
					set={modalHandler}
					type={p.type}
					head={p.head}
					text={p.text}
					img={p.img}
					alt={p.alt}
					key={p.head}
				/>
			))}
			{show &&
				showProjects.map((p) => (
					<ProjectCard
						set={modalHandler}
						type={p.type}
						head={p.head}
						text={p.text}
						img={p.img}
						alt={p.alt}
						key={p.head}
					/>
				))}
		</section>
	);
};
export default ProjectsMain;
