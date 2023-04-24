import Nav from "./Nav/Nav";
import MainHeader from "./MainHeader/MainHeader";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<Nav />
			<MainHeader />
		</header>
	);
};

export default Header;
