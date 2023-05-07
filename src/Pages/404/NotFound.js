import styles from "./404.module.css";
import MainBtn from "../../components/Buttons/MainBtn";
import xwing from "./xwing.png";
import blast from "./blast.gif";

const NotFound = () => {
	return (
		<>
			<div className={styles.notFound}>
				<div className={styles.container}>
					<div className={styles.four1}>4</div>
					<div className={styles.deathStar}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
							<path
								fill="white"
								d="M256 32C135.1 32 36.06 127.9 32.12 248.7c136.18 13.8 311.58 13.8 447.78 0-.3-10.6-1.4-21.2-3.3-31.7H352v-18h32v-16h32v-16h45.6c-4.5-10.4-9.8-20.4-15.8-30H368v-18h48v-14h-18.7V89H368V73h-48V55h34.9c-30.8-15.14-64.6-23-98.9-23zm-64.3 64h.3c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64c0-35.2 28.5-63.83 63.7-64zM32.26 266.7C37.97 386.1 136.4 480 256 480c10.6-1.4 16 0 43.8-7v-18h59c8.1-4.2 16-8.9 23.5-14H368v-16h-32v-18h85.4c8.5-9.3 16.3-19.4 23.1-30H432v-16h-80v-18h16v-16h48v-16h32v-16h28.5c1.7-9.4 2.7-18.8 3.2-28.3-136.8 13.7-310.6 13.7-447.44 0z"
							/>
						</svg>
					</div>
					<div className={styles.four2}>4</div>
				</div>
				<img className={styles.xwing} src={xwing} alt="X-Wing" />
				<img className={styles.blast1} src={blast} alt="Blaster Bolt" />
				<img className={styles.blast2} src={blast} alt="Blaster Bolt" />
				<MainBtn
					text="Home"
					link="/"
					btn1Color="btn1ColorRed"
					btn2Color="btn1ColorBlue"
					className={styles.btn}
				/>
			</div>
			<div className={styles.btn}></div>
		</>
	);
};

export default NotFound;
