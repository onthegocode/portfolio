import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ open, onClose, children }) => {
	if (!open) return null;
	if (open) document.body.style.overflowY = "hidden";
	const closeHandler = () => {
		document.body.style.overflowY = "visible";
		onClose();
	};
	return (
		<div className="modal overlay" onClick={closeHandler}>
			{children}
		</div>
	);
};

export default Modal;
