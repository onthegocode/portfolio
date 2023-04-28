import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader"; //make styles component only using styled-components
import SideSocial from "./components/SideSocial/SideSocial";
import gsap from "gsap";

// let tl = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });

function App() {
	const [loaded, setLoaded] = useState(true);

	//Loader
	const loadedState = () => {
		let tl = gsap.timeline({ defaults: { ease: "Expo.easeOut" } });
		setTimeout(() => {
			document.body.classList.remove("hidOverflowY");
		}, 2500);
		setTimeout(() => {
			setLoaded(false);
		}, 4000);

		const observer = new IntersectionObserver((entries) => {
			entries.forEach(
				(entry) => {
					entry.target.classList.toggle("fadein", entry.isIntersecting);
				},
				{ threshold: 1 }
			);
		});
		document.querySelectorAll(".mainSection").forEach((e) => {
			observer.observe(e);
		});
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
