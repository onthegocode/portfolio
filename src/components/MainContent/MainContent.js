import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import styles from "./MainContent.module.css";

const MainContent = () => {
	return (
		<main className={styles.main}>
			<About />
			<Projects />
			<Contact />
		</main>
	);
};

export default MainContent;
