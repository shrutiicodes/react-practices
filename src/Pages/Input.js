import React, { useReducer } from "react";

function Input() {
	// const inputElement = useRef(null);

	// function onButtonClick() {
	// 	inputElement.current.focus();
	// }

	const [checked, toggle] = useReducer((checked) => !checked, false);

	return (
		<>
			{/* <input type="text" ref={inputElement} />
			<button onClick={onButtonClick}>Focus</button>
			<br /> */}
			<input
				id="check"
				type="checkbox"
				value={checked}
				onChange={toggle}
			></input>
			<label htmlFor="check">{checked ? "Checked" : "Not Checked"}</label>
		</>
	);
}

export default Input;
