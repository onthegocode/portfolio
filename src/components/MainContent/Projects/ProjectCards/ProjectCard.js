import MainBtn from "../../../Buttons/MainBtn";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({ head, type, text, link, img, alt }) => {
	return (
		<a href={link} className={styles.projectCard}>
			<img src={img} className={styles["projectCard--img"]} alt={alt} />
			<span className={styles["projectCard--inner"]}>
				<div className={styles["projectCard--content"]}>
					<h4 className={styles["projectCard--h4"]}>{head}</h4>
					<span></span>
					<p className={styles["projectCard--p"]}>{text}</p>
				</div>
				<MainBtn
					className={styles.btn}
					nonBtn={true}
					link="#"
					text={type}
					btn1Color="btn2ColorRed"
					btn2Color="btn2ColorBlue"
					align="btnCenter"
				/>
			</span>
		</a>
	);
};

export default ProjectCard;
