import styles from "./MainBtn.module.css";

const MainBtn = ({ text, link }) => {
	return (
		<a href={link} className={`${styles.btn} ${styles.btn}`}>
			{text}
		</a>
	);
};

export default MainBtn;
