import styles from "./MainBtn.module.css";

const MainBtn = ({ text, link, btn1Color, btn2Color, align }) => {
	return (
		<a
			href={link}
			className={`${styles.btn} ${styles[btn1Color]} ${styles[btn2Color]} ${styles[align]}`}>
			{text}
		</a>
	);
};

export default MainBtn;
