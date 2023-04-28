import AboutKnowme from "./AboutKnowme";
import AboutTech from "./AboutTech";
import styles from "./AboutMain.module.css";

const AboutMain = () => {
	return (
		<section className={styles.aboutMain}>
			<AboutKnowme />
			<AboutTech />
		</section>
	);
};

export default AboutMain;