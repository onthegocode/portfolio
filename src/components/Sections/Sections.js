import { useInView } from "react-intersection-observer";
import "./Sections.css";

const Sections = ({ className, children, id }) => {
	let width = window.innerWidth;
	let height = window.innerHeight;
	let setThreshold = 0.5;
	if (width <= 1024 && width > 400 && height < 700) {
		setThreshold = 0.2;
	} else if (width < 300) {
		setThreshold = 0.2;
	}
	const options = {
		threshold: setThreshold,
		triggerOnce: true,
	};
	const { ref: myRef, inView: isVisible } = useInView(options);
	return (
		<section
			ref={myRef}
			id={id}
			className={`section ${className} ${isVisible && "animate"}`}>
			{children}
		</section>
	);
};
export default Sections;
