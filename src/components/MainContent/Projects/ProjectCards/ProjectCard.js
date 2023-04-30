import MainBtn from "../../../Buttons/MainBtn";
import "./ProjectCard.css";

const ProjectCard = ({ head, type, text, link, img, alt, set }) => {
	return (
		<button className="projectCard" onClick={() => set(alt)}>
			<img src={img} className="projectCard--img" alt={alt} />
			<span className="projectCard--inner">
				<div className="projectCard--content">
					<h4 className="projectCard--h4">{head}</h4>
					<span></span>
					<p className="projectCard--p">{text}</p>
				</div>
				<MainBtn
					className="btn"
					nonBtn={true}
					link="#"
					text={type}
					btn1Color="btn2ColorRed"
					btn2Color="btn2ColorBlue"
					align="btnCenter"
				/>
			</span>
		</button>
	);
};

export default ProjectCard;
