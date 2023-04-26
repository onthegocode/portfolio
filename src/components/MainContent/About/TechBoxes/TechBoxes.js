import styles from "./TechBoxes.module.css";

const TechBoxes = ({ text, link }) => {
	return (
		<a className={styles.techBox} href={link} target="_blank" rel="noreferrer">
			{text}
		</a>
	);
};

export default TechBoxes;
