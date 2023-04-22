import React from "react";
import NavLinks from "./NavLinks";
import styles from "./Nav.module.css";

const Nav = () => {
	//This data will later be had via database mostlikely supabase
	const links = [
		{
			text: "About",
			url: "#about",
		},
		{
			text: "Projects",
			url: "#projects",
		},
		{
			text: "Get In Touch",
			url: "#GetinTouch",
		},
	];
	const social = [
		{
			text: "Linkedin",
			url: "https://www.linkedin.com/",
			on: true,
			slash: "/",
		},
		{
			text: "Upwork",
			url: "https://www.upwork.com/freelancers/~018eda0f0b1b7f8ea1",
			on: true,
			slash: "/",
		},
		{
			text: "Github",
			url: "https://github.com/onthegocode",
			on: true,
		},
	];

	return (
		<nav className="nav">
			<div className={styles.nav__container}>
				<section className="nav__container-links">
					{links.map(({ text, url, on }) => (
						<NavLinks key={text} text={text} url={url} on={on} />
					))}
				</section>
				<section className="nav__container-social">
					{social.map(({ text, url, on, slash }) => (
						// Used to track and contain the nav button and slash. have to use full React.Fragment name for the key prop to be added
						<React.Fragment key={text}>
							<NavLinks key={text} text={text} url={url} on={on} /> {slash}
						</React.Fragment>
					))}
				</section>
			</div>
		</nav>
	);
};

export default Nav;
