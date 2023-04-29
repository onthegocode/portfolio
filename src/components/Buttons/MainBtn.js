import styles from "./MainBtn.module.css";

const MainBtn = ({
	onClick,
	text,
	link,
	btn1Color,
	btn2Color,
	align,
	className,
	nonBtn,
}) => {
	if (nonBtn) {
		return (
			<span
				onClick={onClick}
				href={link}
				className={`${styles.btn} ${styles[btn1Color]} ${styles[btn2Color]} ${styles[align]} ${className} nonBtn`}>
				{text}
			</span>
		);
	}
	return (
		<a
			onClick={onClick}
			href={link}
			className={`${styles.btn} ${styles[btn1Color]} ${styles[btn2Color]} ${styles[align]} ${className}`}>
			{text}
		</a>
	);
};

export default MainBtn;
