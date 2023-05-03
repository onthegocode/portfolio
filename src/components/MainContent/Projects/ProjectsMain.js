import ProjectCard from "./ProjectCards/ProjectCard";
import styles from "./ProjectsMain.module.css";

const ProjectsMain = ({ show, openModal, setOpenModal, modalType }) => {
	const modalHandler = () => {
		setOpenModal(!openModal);
	};
	const projects = [
		{
			type: "Client Project",
			head: "iFrame Wrapper",
			text: "Payment Processing System Wrapper",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "iframewrapper",
		},
		{
			type: "Client Project",
			head: "Typkup",
			text: "Ecommerce Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "typkup",
		},
		{
			type: "Client Project",
			head: "ManCaveGamez",
			text: "Ecommerce Sports Website",
			link: "#",
			img: "https://expertphotography.b-cdn.net/wp-content/uploads/2022/05/Landscape-Photography-Sophie-Turner.jpg",
			alt: "ManCaveGamez",
			mType: "mancavegamez",
		},
		{
			type: "Client Project",
			head: "OccFit Solutions",
			text: "Medical Footwear Ecommerce Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "occfit",
		},
		{
			type: "Client Project",
			head: "EcoTwist",
			text: "Ecommerce Detergent Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "ecotwist",
		},
		{
			type: "Client Project",
			head: "Odor Release",
			text: "Company Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "odorrelease",
		},
		{
			type: "Course Project",
			head: "Mapty",
			text: "Hiking/Cycling tracker",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "mapty",
		},

		{
			type: "Personal Project",
			head: "Portfolio Site",
			text: "Personal Portfolio Website",
			link: "#",
			img: "https://www.greenwoodwildlife.org/wp-content/uploads/077thatlilbunny-scaled.jpg",
			alt: "ManCaveGamez",
			mType: "portfolio",
		},
	];

	let width = window.innerWidth;
	let height = window.innerHeight;

	if (width <= 1024 && width > 400 && height < 700) {
		return (
			<section className={styles.projectsMain}>
				{projects.slice(0, 2).map((p) => (
					<ProjectCard
						set={() => {
							modalHandler();
							modalType(p.mType);
						}}
						type={p.type}
						head={p.head}
						text={p.text}
						img={p.img}
						alt={p.alt}
						key={p.head}
					/>
				))}
				{show &&
					projects.slice(2, projects.length).map((p) => (
						<ProjectCard
							set={() => {
								modalHandler();
								modalType(p.mType);
							}}
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
	} else if (width < 1560 && width >= 1140) {
		return (
			<section className={styles.projectsMain}>
				{projects.slice(0, 4).map((p) => (
					<ProjectCard
						set={() => {
							modalHandler();
							modalType(p.mType);
						}}
						type={p.type}
						head={p.head}
						text={p.text}
						img={p.img}
						alt={p.alt}
						key={p.head}
					/>
				))}
				{show &&
					projects.slice(4, projects.length).map((p) => (
						<ProjectCard
							set={() => {
								modalHandler();
								modalType(p.mType);
							}}
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
	} else if (width < 1140) {
		return (
			<section className={styles.projectsMain}>
				{projects.slice(0, 3).map((p) => (
					<ProjectCard
						set={() => {
							modalHandler();
							modalType(p.mType);
						}}
						type={p.type}
						head={p.head}
						text={p.text}
						img={p.img}
						alt={p.alt}
						key={p.head}
					/>
				))}
				{show &&
					projects.slice(3, projects.length).map((p) => (
						<ProjectCard
							set={() => {
								modalHandler();
								modalType(p.mType);
							}}
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
	}

	return (
		<section className={styles.projectsMain}>
			{projects.slice(0, 6).map((p) => (
				<ProjectCard
					set={() => {
						modalHandler();
						modalType(p.mType);
					}}
					type={p.type}
					head={p.head}
					text={p.text}
					img={p.img}
					alt={p.alt}
					key={p.head}
				/>
			))}
			{show &&
				projects.slice(6, projects.length).map((p) => (
					<ProjectCard
						set={() => {
							modalHandler();
							modalType(p.mType);
						}}
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
