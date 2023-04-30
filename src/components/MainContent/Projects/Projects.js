import React, { useState } from "react";
import Headers from "../Headers/Headers";
import ProjectsMain from "./ProjectsMain";
import MainBtn from "../../Buttons/MainBtn";
import Sections from "../../Sections/Sections";
import Modal from "../../Modal/Modal";
import ModalContent from "../../Modal/ModalContent";
import styles from "./Projects.module.css";

const Projects = () => {
	const [shows, setShows] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const modalHandler = () => {
		setOpenModal(!openModal);
	};

	const showClick = () => {
		setShows(!shows);
	};
	return (
		<Sections id="projects" className={`${styles.projects}`}>
			<div className="mainSection">
				<Headers
					title="Projects"
					text="Here are a couple of projects I have worked."
					color="redU"
				/>
				<ProjectsMain
					show={shows}
					openModal={openModal}
					setOpenModal={setOpenModal}
				/>
				<MainBtn
					onClick={showClick}
					text={!shows ? "Show More" : "Show Less"}
					link="#GetInTouch"
					btn1Color="btn2ColorRed"
					btn2Color="btn2ColorBlue"
					align="btnCenter"
				/>
			</div>
			{openModal && (
				<Modal open={openModal} onClose={modalHandler}>
					<ModalContent
						onClose={modalHandler}
						h2="Robert McDonald"
						headContent="Senior Software Engineer"
						text="Technical manager skilled in the analysis, design, and development of .Net solutions designed to meet the needs of todays businesses. Experience includes both web based as well as windows forms based solutions built using client/server, n-tier, web service based as well as SOA based architectures. Solid experience in the enterprise architecture of both software and database solutions."
						img=""
						alt="Robert McDonald"
						link="https://www.linkedin.com/in/robert-mcdonald-01b5b912/"
						mail="rmcdonald@remconsulting.com"
					/>
				</Modal>
			)}
		</Sections>
	);
};
export default Projects;
