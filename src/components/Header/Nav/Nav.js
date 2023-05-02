import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "../../Logo/Logo";
import styles from "./Nav.module.css";
import resume from "./Resume.pdf";
const Nav = () => {
	const [open, setOpen] = useState(false);
	const openHandler = () => {
		setOpen(!open);
	};
	let navOffset1 = -55;
	let navOffset2 = 40;
	let width = window.innerWidth;
	if (width < 600) {
		navOffset1 = 0;
		navOffset2 = 0;
	}
	return (
		<nav className="nav">
			<div className={`${styles.nav__container} ${open && styles.opened}`}>
				<section className="nav__container-logo">
					<a href="/">
						<Logo pathClass={styles["nav-logo"]} />
					</a>
				</section>
				<button onClick={openHandler} className={`${styles.menuBtn} `}>
					<div className={styles["nav__container-menu"]}>
						<div className={styles["nav__container-menuInner"]}></div>
					</div>
				</button>
				<section className={`${styles["nav__container-links"]}`}>
					<NavLinks
						onClick={openHandler}
						text="About"
						url="about"
						offset={navOffset1}
					/>{" "}
					/
					<NavLinks
						onClick={openHandler}
						text="Projects"
						url="projects"
						offset={navOffset2}
					/>{" "}
					/
					<NavLinks
						onClick={openHandler}
						text="Resume"
						url={resume}
						on={true}
					/>
				</section>
			</div>
		</nav>
	);
};

export default Nav;
