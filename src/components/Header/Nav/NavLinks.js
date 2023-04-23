import React from "react";
import styles from "./NavLinks.module.css";

const NavLinks = ({ url, text, on }) => {
	return (
		<a className={styles["navlink-btn"]} href={url}>
			{text}
		</a>
	);
};

export default NavLinks;
