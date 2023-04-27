import styles from "./ReferralBox.module.css";

const ReferralBox = ({ name, text, link, img, alt }) => {
	return (
		<>
			<a
				className={styles.referralBox}
				href={link}
				target="_blank"
				rel="noreferrer">
				<div className={styles["referralBox__container"]}>
					<div className={styles["referralBox__img-container"]}>
						<img src={img} className={styles["referralBox--img"]} alt={alt} />
						<svg viewBox="0 0 100 100" preserveAspectRatio="none">
							<circle className="js-circle circle" cx="50" cy="50" r="48" />
						</svg>
					</div>
					<div className={styles["referralBox__innerContainer"]}>
						<h5 className={styles["referralBox--h5"]}>{name}</h5>
						<p className={styles["referralBox--p"]}>{text}</p>
					</div>
				</div>
			</a>
		</>
	);
};
export default ReferralBox;
