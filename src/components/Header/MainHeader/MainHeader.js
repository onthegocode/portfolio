import MainBtn from "../../Buttons/MainBtn";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
	return (
		<div className={styles["main__header-container"]}>
			<div className={styles["main__header-container--inner"]}>
				<span className={styles["highlighted-intro"]}>Hi I'm,</span>
				<h1 className={styles.name}>Andrew Rivera</h1>
				<h2 className={styles.title}>A Dedicated Software Engineer</h2>
				<p className={styles.text}>
					Specializing in building Scalable, Dynamic, User-friendly sites and
					applications, that meet client goals.
				</p>
			</div>
			<MainBtn text="Get In Touch" link="#GetInTouch" />
		</div>
	);
};

export default MainHeader;
