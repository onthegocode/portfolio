import ProjectCard from "./ProjectCards/ProjectCard";
import styles from "./ProjectsMain.module.css";
import typkup from "./imgs/typkupWebsite.png";
import mancavegamez from "./imgs/mancavegamezWebsite.png";
import wrapper from "./imgs/iframewrapperProcessingSystem.png";
import occfit from "./imgs/occfitsolutionsWebsite.png";
import ecotwist from "./imgs/ecotwistWebsite.png";
import odor from "./imgs/odorreleaseWebsite.png";
import mapty from "./imgs/maptyWebsite.png";
import portfolio from "./imgs/portfolioWebsite.png";

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
			img: wrapper,
			alt: "Payment Processing System Wrapper",
			mType: "iframewrapper",
		},
		{
			type: "Client Project",
			head: "Typkup",
			text: "Ecommerce Website",
			link: "#",
			img: typkup,
			alt: "Typkup",
			mType: "typkup",
		},
		{
			type: "Client Project",
			head: "ManCaveGamez",
			text: "Ecommerce Sports Website",
			link: "#",
			img: mancavegamez,
			alt: "ManCaveGamez",
			mType: "mancavegamez",
		},
		{
			type: "Client Project",
			head: "OccFit Solutions",
			text: "Medical Footwear Ecommerce Website",
			link: "#",
			img: occfit,
			alt: "OccFit Solutions",
			mType: "occfit",
		},
		{
			type: "Client Project",
			head: "EcoTwist",
			text: "Ecommerce Detergent Website",
			link: "#",
			img: ecotwist,
			alt: "EcoTwist",
			mType: "ecotwist",
		},
		{
			type: "Client Project",
			head: "Odor Release",
			text: "Company Website",
			link: "#",
			img: odor,
			alt: "Odor Release Technology",
			mType: "odorrelease",
		},
		{
			type: "Course Project",
			head: "Mapty",
			text: "Hiking/Cycling tracker",
			link: "#",
			img: mapty,
			alt: "Mapty",
			mType: "mapty",
		},

		{
			type: "Personal Project",
			head: "Portfolio Site",
			text: "Personal Portfolio Website",
			link: "#",
			img: portfolio,
			alt: "Portfolio Site Andrew Rivera Software Engineer - Frontend Developer",
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
