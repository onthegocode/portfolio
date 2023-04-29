import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; //make styles component only using styled-components
import SideSocial from "./components/SideSocial/SideSocial";

// let tl = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });

function App() {
	const [loaded, setLoaded] = useState(true);
	const [side, setSide] = useState(false);

	//Loader
	const loadedState = () => {
		setTimeout(() => {
			document.body.classList.remove("hidOverflowY");
		}, 2500);
		setTimeout(() => {
			setLoaded(false);
		}, 4000);
	};
	window.addEventListener("load", loadedState);
	const isTrue = (val) => {
		setSide(val);
	};
	return (
		<>
			{loaded && <Loader />}
			<Header />
			<MainContent func={isTrue} />
			<SideSocial val={side} />
			<Footer />
		</>
	);
}

export default App;
