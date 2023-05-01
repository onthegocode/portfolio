import React, { useState } from "react";
import NavLinks from "./NavLinks";
import Logo from "../../Loader/Logo";
import styles from "./Nav.module.css";
import resume from "./Resume.pdf";
const Nav = () => {
	const [open, setOpen] = useState(false);
	const openHandler = () => {
		setOpen(!open);
	};
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
						offset={-55}
					/>{" "}
					/
					<NavLinks
						onClick={openHandler}
						text="Projects"
						url="projects"
						offset={40}
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
