import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import styles from "./MainContent.module.css";

const MainContent = ({ func }) => {
	const isTrue = (val) => {
		func(val);
	};
	return (
		<main className={styles.main}>
			<About func={isTrue} />
			<Projects />
			<Contact />
		</main>
	);
};

export default MainContent;
