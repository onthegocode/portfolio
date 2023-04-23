import React from "react";
import NavLinks from "./NavLinks";
import Logo from "../../Loader/Logo";
import styles from "./Nav.module.css";

const Nav = () => {
	return (
		<nav className="nav">
			<div className={styles.nav__container}>
				<section className="nav__container-logo">
					<a href="/">
						<Logo pathClass={styles["nav-logo"]} />
					</a>
				</section>
				<section className="nav__container-links">
					<NavLinks text="About" url="#projects" />
					<NavLinks text="Projects" url="#about" />
					<NavLinks text="Get In Touch" url="#GetinTouch" />
				</section>
			</div>
		</nav>
	);
};

export default Nav;
