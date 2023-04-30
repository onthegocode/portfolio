import SideSocialIcons from "../SideSocial/SideSocialIcons";
import "./ModalContent.css";

const ModalContent = ({
	headContent,
	img,
	h2,
	text,
	link,
	mail,
	onClose,
	alt,
}) => {
	return (
		<div className="modalContainer">
			<div
				className="modalContent"
				onClick={(e) => {
					e.stopPropagation();
				}}>
				<div className="modalHead">
					<button onClick={onClose} className="modalExitBtn">
						<SideSocialIcons social="exit" />
					</button>
					<img className="modalHeadImg" src={img} alt={alt} />
					<div className="modalHeadContent">
						<h2>{h2}</h2>
						<p>{headContent}</p>
					</div>
				</div>
				<div className="modalMainContent">
					<h4>About</h4>
					<p>{text}</p>
					<div className="modalSocial">
						<a href={link} target="_blank" rel="noreferrer">
							<SideSocialIcons social="linkedin" />
						</a>
						<a href={`mailto:${mail}`} target="_blank" rel="noreferrer">
							<SideSocialIcons social="mail" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalContent;
