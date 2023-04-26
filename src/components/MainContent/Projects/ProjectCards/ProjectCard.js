import styles from "./ProjectCard.module.css";

const ProjectCard = ({ text, link, img, alt }) => {
	return (
		<a href={link} className={styles.projectCard}>
			<h4 className={styles["projectCard--h4"]}>{text}</h4>
			<img src={img} className={styles["projectCard--img"]} alt={alt} />
		</a>
	);
};

export default ProjectCard;
