import { useInView } from "react-intersection-observer";
import "./Sections.css";

const Sections = ({ className, children, id }) => {
	const options = {
		threshold: 0.5,
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
