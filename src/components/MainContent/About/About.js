import React, { useState } from "react";
import Headers from "../Headers/Headers";
import styles from "./About.module.css";
import AboutMain from "./AboutMain";
import Sections from "../../Sections/Sections";
import Modal from "../../Modal/Modal";
import ModalContent from "../../Modal/ModalContent";
import Robert from "./RobertMcDonald.png";
import Cindy from "./CindyJohnson.png";

const About = () => {
	const [openModal, SetOpenModal] = useState(false);
	const [content, setContent] = useState("");
	const modalHandler = () => {
		SetOpenModal(!openModal);
		document.body.classList.remove("modalOpened");
	};

	return (
		<Sections id="about" className={`${styles.about}`}>
			<div>
				<Headers
					title="About Me"
					text="A software engineer who’s up to any challenge, and can learn anything with adequate time!"
					color="blueU"
				/>
				<AboutMain func={modalHandler} setContent={setContent} />
			</div>
			{openModal && (
				<Modal open={openModal} onClose={modalHandler}>
					{content === "Robert" ? (
						<ModalContent
							onClose={modalHandler}
							h2="Robert McDonald"
							headContent="Senior Software Engineer"
							text="Technical manager skilled in the analysis, design, and development of .Net solutions designed to meet the needs of todays businesses. Experience includes both web based as well as windows forms based solutions built using client/server, n-tier, web service based as well as SOA based architectures. Solid experience in the enterprise architecture of both software and database solutions."
							img={Robert}
							alt="Robert McDonald"
							link="https://www.linkedin.com/in/robert-mcdonald-01b5b912/"
							mail="rmcdonald@remconsulting.com"
						/>
					) : (
						<ModalContent
							onClose={modalHandler}
							h2="Cindy Johnson"
							headContent="Vice President at Threaded Marketing Group"
							text="I listen carefully and learn the intricacies of your business to craft a full-circle strategy that is purposeful, functional, and audience-specific. 22+ years of B2B, B2C, and non-profit marketing and communications experience, Built brands both from the ground up and rebranded existing ones, Experience in all facets of digital marketing, with expertise in marketing strategy, brand management, email marketing, pay-per-click advertising, and search engine optimization."
							img={Cindy}
							alt="Cindy Johnson"
							link="https://www.linkedin.com/in/cindy-johnson-6217156/"
							mail="cindy@threadedmarketinggroup.com"
						/>
					)}
				</Modal>
			)}
		</Sections>
	);
};

export default About;
