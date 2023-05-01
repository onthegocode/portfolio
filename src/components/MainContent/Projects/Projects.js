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
			p: `ManCaveGamez is an online retailer specializing in sports and table games, built using Shopify. My responsibility was to implement new features, help fix bugs, and general website maintenance. One feature I implementing was a "Mega Menu" that would be easily editable by using Shopify admin page. I would work hand in hand with Cindy Johnson, to ensure I met client goals. `,
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
			head: "Typkup",
			subhead: "Client Project",
			p: `Typkup is a Woocommerce based store that focuses on collaborating with content creators. My responsibility was to add new features and fix any bugs that would occur on the site. One feature I implemented was the USA-made filter that allows customers to filter based on USA-made products. I also helped to fix an issue on the checkout page where woocommerce was populating admin information such as shipping and names to the form. I did such a fantastic job I was left with 5-star reviews saying "Andrew did a great job fixing an issue with my site. I've had a few people look at the problem, but none were able to do anything about it. Andrew quickly diagnosed the problem and had it fixed in short order! Highly recommend."

			`,
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
			p: "Occfit Solutions is a Progressive pain management & preventative solution for frequent health concerns in the workplace. Specializing in footwear, customers don't pay using their credit cards but rather through insurance. Tasked with fixing issues such as responsive concerns and implementing a custom email template. The email template would provide information to the clients and staff to help fulfill their orders. Worked hand in hand with Cindy Johnson fixing issues and implementing new features.",
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
			p: "EcoTwist is a detergent in-store and online retailer that prides itself on using none toxic chemicals. I was responsible for implementing new features and fixing bugs that occurred. One task was to implement a purchase subscription option into their product pages that would allow customers to subscribe based on product quantity. I had also helped to implement a custom landing page for a special event.",
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
					text: "Shopify",
					link: "https://www.shopify.com/",
				},
				{
					text: "Liquid",
					link: "https://shopify.dev/docs/api/liquid",
				},
			],
		},
		mapty: {
			head: "Mapty",
			subhead: "Course Project",
			p: "Mapty is a course project that allows users to save their favorite hiking or cycling trails. During this project, I learned how to use the geolocation API along with implementing Open Street Map Library. This was a fun project that allowed me to delve further into JavaScript and the different programming paradigms like OOP.",
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
			p: "iFrame Wrapper was built to help the user easily save credit cards and process payments at a later date, all while being secure. Using the Accept Blue iFrame and API, I was tasked by Robert McDonald to build a wrapper that would act like a mini library where the user could save and charge a card with a couple of lines. I was also tasked with implementing backend functionality using C# and .Net Core developing a Transaction controller API that saved and processed payments. I learned C#, .Net Core and how payment processing works, along with using Accept blue.",
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
			p: "Odor Release Technology partners with retailers to create eco-friendly and effective detergents for private labels, store brands, and consumer-facing brands. I was tasked with creating their website were businesses and customers could go and get more information about Odor Release Technology. Built using WordPress, I created a custom Theme from scratch using HTML, CSS, PHP, and JavaScript.",
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
			p: "For my portfolio website,  I wanted to implement some new technologies I have been learning. That's why this website is built using ReactJS. The goal of this site is to showcase my creative side and who I am as a Developer, along with my developer skills. Showing projects I have worked on, along with people I have worked with that can attest to my skills. ",
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
