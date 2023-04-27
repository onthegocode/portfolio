import React, { useState, userState } from "react";
import MainBtn from "../../Buttons/MainBtn";
import styles from "./MainHeader.module.css";

import Modal from "../../Modal/Modal";

const MainHeader = () => {
	const [test, testSet] = useState(false);
	const testhandler = () => {
		testSet(!test);
	};
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

			<MainBtn
				onClick={testhandler}
				text="Get In Touch"
				link="#GetInTouch"
				btn1Color="btn1ColorRed"
				btn2Color="btn1ColorBlue"
			/>
			{test && <Modal />}
		</div>
	);
};

export default MainHeader;
