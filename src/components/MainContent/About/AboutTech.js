import TechBoxes from "./TechBoxes/TechBoxes.js";
import ReferralBox from "./ReferralBox/ReferralBox.js";
import styles from "./AboutTech.module.css";

const AboutTech = () => {
	return (
		<div className={styles.aboutTech}>
			<h3 className={styles["aboutTech-h3"]}>Technologies & Referrals </h3>
			<p className={styles["aboutTech-p"]}>
				Here are a few technologies I’ve been working with recently:
			</p>
			<div className={styles["aboutTech-technologies"]}>
				<TechBoxes
					text="HTML"
					link="https://developer.mozilla.org/en-US/docs/Web/HTML"
				/>
				<TechBoxes
					text="CSS"
					link="https://developer.mozilla.org/en-US/docs/Web/CSS"
				/>
				<TechBoxes text="SCSS" link="https://sass-lang.com/" />
				<TechBoxes
					text="JavaScript"
					link="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
				/>
				<TechBoxes text="jQuery" link="https://jquery.com/" />
				<TechBoxes text="React" link="https://react.dev/" />
				<TechBoxes text="WordPress" link="https://wordpress.com/" />
				<TechBoxes text="Shopify" link="https://www.shopify.com/" />
				<TechBoxes text="Liquid" link="https://shopify.dev/docs/api/liquid" />
				<TechBoxes
					text="C#"
					link="https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/"
				/>
				<TechBoxes
					text=".Net Core"
					link="https://learn.microsoft.com/en-us/dotnet/core/introduction"
				/>
				<TechBoxes
					text="MySQL"
					link="https://dev.mysql.com/doc/refman/8.0/en/what-is-mysql.html"
				/>
			</div>
			<p className={styles["aboutTech-p"]}>
				Here are some of my referrals, feel free to reach out:
			</p>
			<div className={styles["aboutTech-referrals"]}>
				<ReferralBox
					text="Robert McDonald"
					innerText="Software Engineer"
					link="https://www.linkedin.com/in/robert-mcdonald-01b5b912/"
				/>
				<ReferralBox
					text="Cindy Johnson"
					innerText="Senior Marketer"
					link="https://www.linkedin.com/in/cindy-johnson-6217156/"
				/>
			</div>
		</div>
	);
};

export default AboutTech;
