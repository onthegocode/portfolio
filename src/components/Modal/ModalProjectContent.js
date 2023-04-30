import SideSocialIcons from "../SideSocial/SideSocialIcons";
import "./ModalProjectContent.css";

const ModalPojectContent = ({
	subhead,
	text,
	h2,
	link,
	github,
	children,
	onClose,
}) => {
	return (
		<div className="modalProjectContainer">
			<div
				className="modalProjectContent"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<a
					href={link}
					target="_blank"
					rel="noreferrer"
					className="modalProjectHead">
					<h2>{h2}</h2>
					<h6>{subhead}</h6>
				</a>
				<button
					onClick={(e) => {
						e.stopPropagation();
						onClose();
					}}
					className="modalExitBtn">
					<SideSocialIcons social="exit" />
				</button>
				<div className="modalProjectMain">
					<div className="modalProjectDetails">
						<h4>Project Overview</h4>
						<p>{text}</p>
					</div>
					<div className="modalProjectTech">
						<h4>Technologies</h4>
						<div className="modalProjectTechBoxes">{children}</div>
					</div>
					<div className="modalProjectLinks">
						{github && (
							<a href={github} target="_blank" rel="noreferrer">
								<SideSocialIcons social="github" />
							</a>
						)}

						<a href={link} target="_blank" rel="noreferrer">
							<SideSocialIcons social="link" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalPojectContent;
