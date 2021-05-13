import React, { useState } from "react";

const [firstItem, ,] = ["lamp", "laptop", "phone"];

console.log(firstItem);

function Form() {
	const [name, setName] = useState("");

	function handleChange(e) {
		setName(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		alert("Submitted");
		setName("");
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={name} required onChange={handleChange}></input>
			<button type="submit">Submit</button>
		</form>
	);
}

export default Form;
