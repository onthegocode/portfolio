import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; //make styles component only using styled-components
import SideSocial from "./components/SideSocial/SideSocial";

function App() {
	const [loaded, setLoaded] = useState(true);

	//Loader
	const loadedState = () => {
		setTimeout(() => (document.body.style.overflowY = "visible"), 3250);
		setTimeout(() => {
			setLoaded(false);
		}, 4600);
	};
	window.addEventListener("load", loadedState);

	return (
		<>
			{loaded && <Loader />}
			<Header />
			<SideSocial />
			<Footer />
		</>
	);
}

export default App;
