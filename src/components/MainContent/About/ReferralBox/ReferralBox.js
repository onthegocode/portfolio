import styles from "./ReferralBox.module.css";

const ReferralBox = ({ link, text, innerText }) => {
	return (
		<>
			<a
				className={styles.referralBox}
				href={link}
				target="_blank"
				rel="noreferrer">
				{text}
				<span className={styles["referralBox-inner"]}>{innerText}</span>
			</a>
		</>
	);
};
export default ReferralBox;
