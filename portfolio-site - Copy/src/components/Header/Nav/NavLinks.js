import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = ({ url, text, on }) => {
	return (
		<a
			className={styles["navlink-btn"]}
			href={url}
			target={on ? "_blank" : ""}
			rel="noreferrer">
			{text}
		</a>
	);
};

export default NavLinks;
