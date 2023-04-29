import SideSocialItem from "./SideSocialItem";
import SideSocialIcons from "./SideSocialIcons";
import styles from "./SideSocial.module.css";

const SideSocial = ({ val }) => {
	return (
		<div
			className={`${styles.sideSocial} ${val && "Socialred"} mainSideSocial `}>
			<ul className={styles["main__social-container"]}>
				<SideSocialItem
					link="https://github.com/onthegocode"
					social={<SideSocialIcons social="github" />}
				/>
				<SideSocialItem
					link="https://www.upwork.com/freelancers/~018eda0f0b1b7f8ea1"
					social={<SideSocialIcons social="upwork" />}
				/>
				<SideSocialItem
					link="https://www.linkedin.com/in/ot-gc-803223168/"
					social={<SideSocialIcons social="linkedin" />}
				/>
				<SideSocialItem
					link="https://codepen.io/onthegocode"
					social={<SideSocialIcons social="codepen" />}
				/>
			</ul>
		</div>
	);
};

export default SideSocial;
