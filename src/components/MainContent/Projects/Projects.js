import React, { useState } from "react";
import Headers from "../Headers/Headers";
import ProjectsMain from "./ProjectsMain";
import MainBtn from "../../Buttons/MainBtn";
import Sections from "../../Sections/Sections";
import Modal from "../../Modal/Modal";
import ModalPojectContent from "../../Modal/ModalProjectContent";
import TechBoxes from "../About/TechBoxes/TechBoxes";
import styles from "./Projects.module.css";

const Projects = () => {
	const [shows, setShows] = useState(false);
	const [openModal, setOpenModal] = useState(false);
	const [modalType, setmodalType] = useState("");
	const modalHandler = () => {
		setOpenModal(!openModal);
		document.body.classList.remove("modalOpened");
	};
	const modalTypeHandler = (val) => {
		setmodalType(val);
	};
	const showClick = () => {
		setShows(!shows);
	};

	const projects = {
		mancavegamez: {
			head: "ManCaveGamez",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://mancavegamez.com/",
			github: "https://github.com/onthegocode/megamenumancave",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "Shopify",
					link: "https://www.shopify.com/",
				},
				{
					text: "Liquid",
					link: "https://shopify.dev/docs/api/liquid",
				},
				{
					text: "Bootstrap",
					link: "https://getbootstrap.com/",
				},
			],
		},
		typkup: {
			head: "Tykup",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://typkup.com/",
			github: "",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "WordPress",
					link: "https://wordpress.com/",
				},
				{
					text: "PHP",
					link: "https://www.php.net/",
				},
			],
		},
		occfit: {
			head: "OccFit Solutions",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://occfitsolutions.com/",
			github: "https://github.com/onthegocode/occfitinstockshoefilter",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "Shopify",
					link: "https://www.shopify.com/",
				},
				{
					text: "Liquid",
					link: "https://shopify.dev/docs/api/liquid",
				},
			],
		},
		ecotwist: {
			head: "EcoTwist",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://ecotwistclean.com/collections/all",
			github: "",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "WordPress",
					link: "https://wordpress.com/",
				},
				{
					text: "PHP",
					link: "https://www.php.net/",
				},
			],
		},
		mapty: {
			head: "Mapty",
			subhead: "Course Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://onthegocode.github.io/Mapty/",
			github: "https://github.com/onthegocode/Mapty",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "Geolocation API",
					link: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API",
				},
				{
					text: "Open Street Map",
					link: "https://www.openstreetmap.org/help",
				},
			],
		},
		iframewrapper: {
			head: "iFrame Wrapper",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://www.stantonoptical.com/",
			github: "https://github.com/onthegocode/AcceptBlueiFrameWrapper",
			techBoxes: [
				{
					text: "C#",
					link: "https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/",
				},
				{
					text: ".Net Core",
					link: "https://learn.microsoft.com/en-us/dotnet/core/introduction",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "jQuery",
					link: "https://jquery.com/",
				},
				{
					text: "Accept Blue",
					link: "https://accept.blue/",
				},
			],
		},
		odorrelease: {
			head: "Odor Release",
			subhead: "Client Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://odorreleasetechnology.com/",
			github: "",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "WordPress",
					link: "https://wordpress.com/",
				},
				{
					text: "PHP",
					link: "https://www.php.net/",
				},
			],
		},
		portfolio: {
			head: "Portfolio Website",
			subhead: "Personal Project",
			p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
			link: "https://andrewrivera.me/",
			github: "https://github.com/onthegocode/portfolio",
			techBoxes: [
				{
					text: "HTML",
					link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
				},
				{
					text: "CSS",
					link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
				},
				{
					text: "JavaScript",
					link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
				},
				{
					text: "ReactJS",
					link: "https://react.dev/",
				},
				{
					text: "CSS Modules",
					link: "https://github.com/css-modules/css-modules",
				},
			],
		},
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
					modalType={modalTypeHandler}
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
					<ModalPojectContent
						onClose={modalHandler}
						subhead={projects[modalType].subhead}
						h2={projects[modalType].head}
						text={projects[modalType].p}
						link={projects[modalType].link}
						github={projects[modalType].github}>
						{projects[modalType].techBoxes.map((box) => {
							return (
								<TechBoxes key={box.text} text={box.text} link={box.link} />
							);
						})}
					</ModalPojectContent>
				</Modal>
			)}
		</Sections>
	);
};
export default Projects;
