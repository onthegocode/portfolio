import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";

function App() {
	const [loaded, setLoaded] = useState(true);
	const [loadedHid, setLoadedHid] = useState(true);

	//Loader
	const loadedState = () => {
		setTimeout(() => {
			setLoadedHid(false);
		}, 2500);
		setTimeout(() => {
			setLoaded(false);
		}, 4000);
	};

	useEffect(() => {
		loadedState();
	}, []);

	return (
		<div className={`bodyMain ${loadedHid && "hidOverflowY"}`}>
			<Header />
			<MainContent />
			<Footer />
			{loaded && <Loader />}
		</div>
	);
}

export default App;
