import styles from "./ProjectCard.module.css";

const ProjectCard = ({ head, text, link, img, alt }) => {
	return (
		<a href={link} className={styles.projectCard}>
			<img src={img} className={styles["projectCard--img"]} alt={alt} />
			<span className={styles["projectCard--inner"]}>
				<h4 className={styles["projectCard--h4"]}>{head}</h4>
				<p>{text}</p>
			</span>
		</a>
	);
};

export default ProjectCard;
