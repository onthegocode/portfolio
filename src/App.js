import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/404/NotFound";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
