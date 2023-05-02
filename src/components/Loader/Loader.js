import Logo from "../Logo/Logo";
import styles from "./Loader.module.css";

const Loader = () => {
	return (
		<div className={styles["loader__container"]}>
			<Logo svgClass={styles["loader__svg"]} pathClass={styles.path} />
		</div>
	);
};

export default Loader;
