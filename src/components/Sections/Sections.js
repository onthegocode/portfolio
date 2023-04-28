import styles from "./Sections.module.css";

const Sections = ({ className, children, id }) => {
	return (
		<section id={id} className={`${styles.section} ${className}`}>
			{children}
		</section>
	);
};
export default Sections;
