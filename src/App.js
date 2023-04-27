import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; //make styles component only using styled-components
import SideSocial from "./components/SideSocial/SideSocial";

function App() {
	const [loaded, setLoaded] = useState(true);

	//Loader
	const loadedState = () => {
		setTimeout(() => document.body.classList.remove("hidOverflowY"), 2500);
		setTimeout(() => {
			setLoaded(false);
		}, 4000);
	};
	window.addEventListener("load", loadedState);

	return (
		<>
			{loaded && <Loader />}
			<Header />
			<MainContent />
			<SideSocial />
			<Footer />
		</>
	);
}

export default App;
