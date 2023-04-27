import React, { useState } from "react";
import "./Modal.css";

const Modal = () => {
	const [show, setShow] = useState(true);

	const showHandler = (e) => {
		const box = e.target;
		box.classList.contains("modalfaded")
			? box.classList.remove("modalfaded")
			: box.classList.add("modalfaded");
		console.log(box.classList);
	};

	return (
		<div className="modal modalfaded" onClick={showHandler}>
			Test
		</div>
	);
};

export default Modal;
