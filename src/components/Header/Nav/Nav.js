import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../../Loader/Logo";
import styles from "./Nav.module.css";
import resume from "./Resume.pdf";
const Nav = () => {
	return (
		<nav className="nav">
			<div className={styles.nav__container}>
				<section className="nav__container-logo">
					<a href="/">
						<Logo pathClass={styles["nav-logo"]} />
					</a>
				</section>
				<section className={styles["nav__container-links"]}>
					<NavLinks text="About" url="about" offset={-55} /> /
					<NavLinks text="Projects" url="projects" offset={0} /> /
					<NavLinks text="Resume" url={resume} on={true} />
				</section>
			</div>
		</nav>
	);
};

export default Nav;
