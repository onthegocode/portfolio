import styles from "./SideSocialItem.module.css";

const SideSocialItem = ({ social, link }) => {
	return (
		<li>
			<a
				className={`${styles.btn} social`}
				href={link}
				target="_blank"
				rel="noreferrer">
				{social}
			</a>
		</li>
	);
};

export default SideSocialItem;
