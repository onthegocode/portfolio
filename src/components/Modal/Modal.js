import "./Modal.css";

const Modal = ({ open, onClose, children }) => {
	if (!open) return null;
	if (open) document.body.classList.add("modalOpened");
	const closeHandler = () => {
		onClose();
		document.body.classList.remove("modalOpened");
	};
	return (
		<div className="modal overlay" onClick={closeHandler}>
			{children}
		</div>
	);
};

export default Modal;
