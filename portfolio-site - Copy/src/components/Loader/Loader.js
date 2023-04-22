import styles from "./Loader.module.css";

const Loader = ({ text }) => {
	return (
		<>
			<div>
				<svg viewBox="0 0 1200 300" className={styles.svg1}>
					<symbol id="s-text">
						<text text-anchor="middle" x="50%" y="80%">
							{text}
						</text>
					</symbol>
					<g>
						<use href="#s-text" className={styles["text-copy"]}></use>
						<use href="#s-text" className={styles["text-copy"]}></use>
						<use href="#s-text" className={styles["text-copy"]}></use>
						<use href="#s-text" className={styles["text-copy"]}></use>
						<use href="#s-text" className={styles["text-copy"]}></use>
					</g>
				</svg>
			</div>
		</>
	);
};

export default Loader;
