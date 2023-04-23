import Nav from "./Nav/Nav";
import MainHeader from "./MainHeader/MainHeader";
import CompanyCarousel from "./CompanyCarousel/CompanyCarousel";
import styles from "./Header.module.css";

const Header = () => {
	return (
		<header className={styles.header}>
			<Nav />
			<MainHeader />
			<CompanyCarousel />
		</header>
	);
};

export default Header;
