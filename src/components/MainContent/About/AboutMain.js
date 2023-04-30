import AboutKnowme from "./AboutKnowme";
import AboutTech from "./AboutTech";
import styles from "./AboutMain.module.css";

const AboutMain = ({ func, setContent }) => {
	return (
		<section className={`${styles.aboutMain} mainAbout`}>
			<AboutKnowme />
			<AboutTech func={func} setContent={setContent} />
		</section>
	);
};

export default AboutMain;
