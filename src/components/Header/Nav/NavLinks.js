import React from "react";
import { Link } from "react-scroll";
import styles from "./NavLinks.module.css";

const NavLinks = ({ url, text, on, offset, onClick }) => {
	if (on) {
		return (
			<a
				onClick={onClick}
				className={styles["navlink-btn"]}
				href={url}
				target="_blank"
				rel="noreferrer">
				{text}
			</a>
		);
	}
	return (
		<Link
			onClick={onClick}
			to={url}
			spy={true}
			smooth={true}
			offset={offset}
			duration={500}
			className={styles["navlink-btn"]}
			href={url}>
			{text}
		</Link>
	);
};

export default NavLinks;
